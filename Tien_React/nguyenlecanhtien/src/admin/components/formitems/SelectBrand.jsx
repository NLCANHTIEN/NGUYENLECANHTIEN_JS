import React, { useEffect, useState } from 'react'
import SelectBox from './SelectBox'
import brandApi from '../../../api/brandApi';

export default function SelectBrand(props) {
  const defaultValue = props.defaultValue
 const [data,setData] = useState([]);
 
 const handleFunction=props.handleFunction

 useEffect(()=> {
 const fetchBrands= async ()=>
 {
    const response= await brandApi.getAll();


    setData(response.map((barnd)=>{
      return {
        label: barnd.brand_name,
        value: barnd.id
      }
    }))
    

 }
 fetchBrands()
 },[])
 return (
<SelectBox name='brand_id' data={data} defaultValue={defaultValue} handleFunction={handleFunction} />
  )
}
