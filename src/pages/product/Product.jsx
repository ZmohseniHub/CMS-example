import React from 'react'
import { Link } from 'react-router-dom'
import Chart from "./../../components/chart/Chart"
import { productsData } from '../../data'
import PublishIcon from "@mui/icons-material/Publish"

import "./Product.css"

export default function Product() {


  return (

    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">productName</h1>
        <Link to="/newProduct">
          <button className='productAddBtn'>Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale in Month" data={productsData} />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img className='productInfoImg' src="/images/1.jfif" alt="" />
            <span className="productName">Name</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID</div>
              <div className="productInfoValue">4</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name: </div>
              <div className="productInfoValue">Dell Laptop</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales: </div>
              <div className="productInfoValue">$90000</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active: </div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock: </div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input placeholder='Laptop'></input>
            <label>In Stock</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploader">
              <img className='productUploaderImg' src="/images/1.jfif" alt="" />
              <PublishIcon style={{cursor:'pointer'}}/>
            </div>
            <button className='productButton'>Upload/Edite</button>
          </div>
        </form>
      </div>

    </div>
  )
}
