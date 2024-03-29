import React, { useState } from 'react'

import SelectBox from '../formitems/SelectBox'
import { toast } from 'react-toastify';
import SelectBrand from '../formitems/SelectBrand'
import SelectCategory from '../formitems/SelectCategory'
import { validateProduct } from './../../../helper/validate';


import productApi from './../../../api/productApi';
export default function ProductAdd() {
  const [product, setProduct] = useState({});
  const [errMsg, setErrMsg] = useState('')
  //bat su kien onchan
  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    })
  }
  ////


  //bat su kien submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrMsg(validateProduct(product))
    ///validate from
    if (errMsg === '') {
      const addProduct = async (product) => {
        try {
          document.getElementById('submit').innerHTML = 'Creating...'
          const response = await productApi.add(product);
          console.log(response)
          document.getElementById('sumbit').innerHTML = 'Create product'
          toast.success('thanh cong');
          document.getElementById('createProduct').reset();
          setProduct({})
        }
        catch (error) {
          toast.error('bi loi' + error)
        }
      }
      addProduct(product);
    }
    else {
      return false;
    }
  }


  return (


    <div className="container">
      <form action='' id='createProduct' className="m-auto" onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <h3 className="my-4">Create Product</h3>
        <divc className='bg-danger'>{errMsg}</divc>
        <hr className="my-4" />
        <div className="form-group mb-3 row"><label htmlFor="product_name" className="col-md-5 col-form-label">Product Name</label>
          <div className="col-md-7"><input type="text" className="form-control" id="product-name2" name="product_name" onChange={handleChange} /></div>
        </div>

        <div className="form-group mb-3 row"><label htmlFor="slug3" className="col-md-5 col-form-label">Slug</label>
          <div className="col-md-7"><input type="text" className="form-control" id="slug3" name="slug" onChange={handleChange} /></div>
        </div>
        <div className="form-group mb-3 row"><label htmlFor="category-option4" className="col-md-5 col-form-label">Category Option</label>
          <div className="col-md-7">

            <SelectCategory defaultValue='-1' handleFunction={handleChange} />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="brand5" className="col-md-5 col-form-label">Brand</label>
          <div className="col-md-7">

            <SelectBrand defaultValue='-1' handleFunction={handleChange} />
          </div>
        </div>
        <div className="form-group mb-3 row"><label htmlFor="product-name2" className="col-md-5 col-form-label">Hinh Anh</label>
          <div className="col-md-7"><input type="text" className="form-control" id="product-name2" name="image" onChange={handleChange} /></div>
        </div>
        <div className="form-group mb-3 row"><label htmlFor="summmary6" className="col-md-5 col-form-label">Summmary</label>
          <div className="col-md-7"><textarea className="form-control" id="summmary6" name="summmary" defaultValue={""} onChange={handleChange} /></div>
        </div>
        <div className="form-group mb-3 row"><label htmlFor="detail7" className="col-md-5 col-form-label">Detail</label>
          <div className="col-md-7"><textarea className="form-control" id="detail7" name="detail" defaultValue={""} onChange={handleChange} /></div>
        </div>
        <div className="form-group mb-3 row"><label htmlFor="price8" className="col-md-5 col-form-label">Price</label>
          <div className="col-md-7"><input type="text" className="form-control" id="price8" name="price" onChange={handleChange} /></div>
        </div>
        <div className="form-group mb-3 row"><label htmlFor="sale-price9" className="col-md-5 col-form-label">Sale Price</label>
          <div className="col-md-7"><input type="text" className="form-control" id="sale-price9" name="sale_price" onChange={handleChange} /></div>
        </div>
        <div className="form-group mb-3 row"><label htmlFor="type10" className="col-md-5 col-form-label">Type</label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="type10" name="type" onChange={handleChange} /></div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="status-option11" className="col-md-5 col-form-label">Status Option</label>
          <div className="col-md-7" >

            <SelectBox name='status' defaultValue='-1' data={[{ label: 'Ân', value: 0 }, { label: 'Hiện', value: 1 }]} />
          </div>
        </div>
        <div className="form-group mb-3 row"><label htmlFor="create-product12" className="col-md-5 col-form-label" />
          <div className="col-md-7"><button className="btn btn-primary" type="submit" id='submit'>Create Product</button></div>
        </div>

      </form>

    </div>

  )
}
