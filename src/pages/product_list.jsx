// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function product_list() {
  
  return (
    <div className='product-list-page'>
      <div className="navbar">
        <div className="left">

          <img src="src/assets/Logo.svg" />
        </div>
        <div className="center">
          <span className='text-1'>Products</span>
          <span className='text-others'>Users</span>
          <span className='text-others'> Billing</span>
          <span className='text-others'>Reports</span>
        </div>
        <div className="right">
          <FaRegBell />
          <span className="badge">1</span>
          <div className="profile-circle">
            <img src="src/assets/Ellipse 8.jpg" />
          </div>
        </div>
      </div>
      <div className='search-part'>
    <h2 className='product-h2'>Products</h2>
   
    <div className='search-container'>
      <input
        className='search-bar'
        type="text"
        placeholder="Search among 1080 products"
      />
      <IoSearch className='search-icon' />
    </div>

    <button className='btn-add-product'>Add Product+ </button>
    </div>
    </div>
  )
}

export default product_list
