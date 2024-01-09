// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { LuPencil,LuTrash } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

function product_list() {
  const products = [
    { id: 1, image: 'src/assets/image 54.jpg',name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
     price: '₹ 8200', quantity: '500', dateAdded: '22 Sep, 2023' },{ id: 2, image: 'src/assets/image 54.jpg',name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
     price: '₹ 8200', quantity: '500', dateAdded: '22 Sep, 2023' },{ id: 3, image: 'src/assets/image 54.jpg',name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
     price: '₹ 8200', quantity: '500', dateAdded: '22 Sep, 2023' },{ id: 4, image: 'src/assets/image 54.jpg',name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
     price: '₹ 8200', quantity: '500', dateAdded: '22 Sep, 2023' },{ id: 5, image: 'src/assets/image 54.jpg',name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
     price: '₹ 8200', quantity: '500', dateAdded: '22 Sep, 2023' },{ id: 6, image: 'src/assets/image 54.jpg',name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
     price: '₹ 8200', quantity: '500', dateAdded: '22 Sep, 2023' },{ id: 7, image: 'src/assets/image 54.jpg',name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
     price: '₹ 8200', quantity: '500', dateAdded: '22 Sep, 2023' }
    
  ];

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
    <div className='product-listing-part'>
      <div className='properties'>
     <h6>Image</h6>
     <h6>Product Name</h6>
     <h6>Price</h6>
     <h6>Quantity</h6>
     <h6>Date added</h6>
     <h6> </h6>
     </div>
     {products.map((product) => (
          <div key={product.id} className='product'>
            {/* Display product information */}
            {/* Add your product image, name, price, quantity, and date added as needed */}
            <img src={product.image}  className='product-image' />
            <p className='product-name'>{product.name}</p>
            <p className='price'>{product.price}</p>
            <p className='quantity'>{product.quantity}</p>
            <p className='date'>{product.dateAdded}</p>
            
            {/* Actions (Edit and Delete icons) */}
            <div className='actions'>
              <LuPencil className='edit-icon' />
              <LuTrash className='delete-icon' />
            </div>
          </div>
        ))}
    </div>
    <div className="scroll-buttons">
  <div className="circle-button">&#60;</div> {/* Less than symbol for going back */}
  {[1, 2, 3, "...", 15].map((item, index) => (
    <div key={index} className="circle-button">
      {item}
    </div>
  ))}
  <div className="circle-button">&#62;</div> {/* Greater than symbol for going forward */}
</div>
    </div>
  )
}

export default product_list
