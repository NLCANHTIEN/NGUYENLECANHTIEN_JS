import React, { useState } from 'react'
import { valideEmail } from '../../../helper/validate';
import contactApi from '../../../api/contactApi';
export default function Contact() {
  const[name,setName] = useState('')
  const [email,setEmail]=useState('');
  const [message,setMessage ]=useState('');
  const [errMsg,setErrMsg]=useState('');
  const handleNameChange=(e)=>{
   setName( e.target.value)
  }
  const handleEmailChange=(e)=>{
    setEmail( e.target.value);
   }
   const handleMessageChange=(e)=>{
    setMessage( e.target.value)
   }
   const validateForm =(name,email,message)=>{
    var err='';
    if (name.length==-0)err+='ten khong duoc de trong';
    if(!valideEmail(email))err+='emlail khong dc de trong'
    if(!message.length==0)err +='ban hay nhap loi nhan';
   }
   const handleSubmit=(e)=>{
    e.preventDefault();
    if(validateForm (name,email,message)===""){
    var data={
      name:name,
      email:email,
      message:message
    }
    const addContact=async(data)=>{
      try{
        await contactApi.add(data);
         alert('thanh cong');
      }

      catch{
        alert('bi loi')
      }
    }
    addContact(data);
   }
  else  
    setErrMsg(validateForm(name,email,message))
    return false;
     
    }
  return (
    <div className="well well-small">
  <h1>Visit us</h1>
  <hr className="soften" />	
  <div className="row-fluid">
    <div className="span6 relative">
      <div className="absoluteBlk" style={{width:'90%'}}>
        <div className="well wellsmall">
          <h4>Contact Details</h4>
          <h5>
            2601 Mission St.<br />
            San Francisco, CA 94110<br /><br />
            info@mysite.com<br />
            Tel 123-456-6780<br />
            Fax 123-456-5679<br />
            web:wwwmysitedomain.com
          </h5>
        </div>
      </div>
    </div>
    <div className="span4">
      <h4>Email Us</h4>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <div className="control-group">
            <input type="text" placeholder="name" className="input-xlarge" onChange={handleNameChange} />
          </div>
          <div className="control-group">
            <input type="text" placeholder="email" className="input-xlarge" onChange={handleEmailChange} />
          </div>

          <div className="control-group">
            <textarea rows={3} id="textarea" className="input-xlarge" defaultValue={""} onChange={handleMessageChange}/>
          </div>
          <button className="shopBtn" type="submit">Send email</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>

  )
  }
  