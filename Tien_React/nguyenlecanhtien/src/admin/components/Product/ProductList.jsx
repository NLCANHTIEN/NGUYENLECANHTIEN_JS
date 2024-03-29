import React from 'react'
import { useEffect, useState } from 'react'
import productApi from '../../../api/productApi'
import Loading from '../../../shop/components/features/Loading'
import { Link, useParams } from 'react-router-dom';
import Paginate from '../Paginate';

export default function ProductList() {
  // khi load du lieu xong loing
  const [loading, setLoading] = useState(true);
  //bien products chua danh sach sp
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState({});
  const { page } = useParams();
  //bien cho del
  const [msgSuccess, setSuccessMsg] = useState('')
  const [msgWarning, setWarningMsg] = useState('')
  const [loadData, setLoadData] = useState(1);
  const handleDelete = (event) => {
    event.target.classList.remove('fa-trash')
    event.target.classList.add('fa-spinner')

    const delProduct = async (id) => {
      try {

        await productApi.del(id)
        setSuccessMsg('xoa thanh cong id=' + id)
        setLoadData(loadData + 1)
      }
      catch (error) {
        setWarningMsg('xoa khong thanh  cong id=' + id + '' + error)
      }
      finally {
        event.target.classList.remove('fa-spinner')
        event.target.classList.add('fa-trash')

      }
    }
    delProduct(event.target.getAttribute('name'))
  }


  useEffect(() => {
    const fetchProducts = async () => {
      var params = {
        page: page
      }

      var response = await productApi.getAll(params);

      setLoading(false)
      setProducts(response.data);
      setMeta(response.meta);


    };
    fetchProducts()
  }, [page, loadData])

  var allBtnDel = document.querySelectorAll('.btn-del');
  allBtnDel.forEach(btnDel => {
    btnDel.addEventListener('click', handleDelete)
  })
  var myWiew = loading === true ? <tr><td> <Loading /></td></tr> :
    (
      products.map((product) => {
        return (
          <tr className="odd" key={product.id}>
            <td>{product.id}</td>
            <td>{product.product_name}</td>
            <td>{product.slug}</td>
            <td>{product.cat_id}</td>
            <td>{product.brand_id}</td>
            <td>{product.status}</td>
            <td>{product.price}</td>

            <td>
              <i className="fas fa-edit"></i>
              <i className="fas fa-eye"></i>
              <i name={product.id} className="btn-del fas fa-trash"></i>
            </td>
          </tr>)
      })

    )
  var myView1 = loading === true ? <tr><td> <Loading /></td></tr> :
    (
      <Paginate meta={meta} basePath='/admin/product/list/' />

    )
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <p className='btn btn-secondary'><Link to='/admin/product/add'>Create Product</Link></p>
        </div>
        <div className="col-12">
          <p className='bg-success'>{msgSuccess}</p>
          <p className='bg-warning'>{msgWarning}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Product List</h3>
        </div>

        <div className="card-body">
          <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
            <div className="row"><div className="col-sm-12 col-md-6" />
              <div className="col-sm-12 col-md-6" /></div><div className="row">
              <div className="col-sm-12">
                <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                  <thead>
                    <tr>
                      <th className="sorting sorting_asc" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">Id</th>
                      <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">ProductName</th>
                      <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">Slug</th>
                      <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">Category Id</th>
                      <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">Bard Id</th>
                      <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">Status</th>
                      <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myWiew}
                  </tbody>

                </table>
              </div>
            </div>
            {myView1}
          </div>
        </div>

      </div>
    </div>






  )
}
