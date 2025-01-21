import React, { useEffect } from 'react'
import { useState } from 'react'
import { products } from '../../data'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import "./Products.css"

export default function Products() {

  const [productsData, setProductsData] = useState(products)

  const deleteProduct = (productId) => {
    setProductsData(prevData => {
      return prevData.filter(product => product.id != productId);
    })
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className='link'>
            <div className='productsUser'>
              <img src={params.row.avatar} className='productsImg' />
              {params.row.title}
            </div>
          </Link>
        )

      }
    },
    {
      field: 'price',
      headerName: 'price',
      width: 200,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='productsAction'>
            <Link to={`/product/${params.row.id}`} className='link'>
              <button className='productsEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='productsDelete' onClick={() => deleteProduct(params.row.id)} />
          </div>
        )
      }
    },
  ]

  return (
    <div className='products'>
      <DataGrid
        rows={productsData}
        columns={columns}
        disableSelectionOnClick
        autoPageSize
        checkboxSelection
      />
    </div>
  );
}