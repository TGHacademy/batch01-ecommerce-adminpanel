// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react'
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { FaAngleLeft } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";

function Add_product() {
  const [product, setProduct] = useState({
    image: null,
    product_name: '',
    quantity: '',
    price: '',
  });
  const [error, setError] = useState({ quantity: '', price: '' });
  const onDrop = useCallback(acceptedFiles => {
    if(acceptedFiles.length>1)
    {
      toast.error('cannot add more than one file')
    }
    acceptedFiles
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleInputChange = (e) => {
    const {  value } = e.target;
    console.log('product_name',value);
    
    setProduct({
      ...product,
      product_name: value,
    });
  };
  const handlequantityChange = (event) => {
    const value = event.target.value;

   
    if (!isNaN(value) || value === '') {
      setProduct({ ...product, quantity: value });
      setError({ ...error, quantity: '' });
    } else {
      setError({ ...error, quantity: 'Please enter a valid number' });
    }
  };
 
  const handlepriceChange = (event) => {
    const value = event.target.value;

   
    if (!isNaN(value) || value === '') {
      setProduct({ ...product, price: value });
      setError({ ...error, price: '' });
    } else {
      setError({ ...error, price: 'Please enter a valid number' });
    }
  };

  const handleAddProduct = async () => {
    try {
      
      const formData = new FormData();
      formData.append('image', product.image);
      formData.append('product_name', product.product_name);
      formData.append('quantity', product.quantity);
      formData.append('price', product.price);
  
      
      const response = await fetch('https://academy-batch-1-project-683989f58497.herokuapp.com/api/admin/products', {
        method: 'POST',
        body: formData,
      });
  
     
      if (response.ok) {
       
        toast.success('Product added successfully!');
        setProduct({
          image: null,
          product_name: '',
          quantity: '',
          price: '',
        });
      } else {
       
        const data = await response.json();
        toast.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('An error occurred while adding the product.');
    }
  };
  

  const handleCancel = () => {
    setProduct({
      image: null,
      product_name: '',
      quantity: '',
      price: '',
    });
  };

  return (
    <div className='addproduct'>
      <div  className='heading'>
      <FaAngleLeft  className='back-btn'/>
        <h2 className='addproduct-h2'>Add New Product</h2>
      </div>
      <label className='image-label'>Image</label>
      <div className='dragdrop-box' {...getRootProps()}>
        <input 
          {...getInputProps()} />
          <MdFileUpload  className='icon-upload'/>
        {
          isDragActive ?

            <p className='dragdrop-text'>Drag & drop your files here</p>:
            // eslint-disable-next-line react/no-unescaped-entities
            <p className='dragdrop-text'>Drag 'n' drop your files here </p>
        }
        
      </div>
      <div>
        <label   className='addproduct-label'>Product Name</label>
        <input
          className='input-productname'
          type="text"
          name="product_name"
          value={product.product_name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label  className='addproduct-label'>Quantity:</label>
        <input
          className='input-quantity'
          type="text"
          name="quantity"
          value={product.quantity}
          onChange={handlequantityChange}
        />
         {error.quantity && <span className="add-product-error">{error.quantity}</span>}
      </div>
      <div>
        <label  className='addproduct-label'>Price:</label>
        <input
          className='input-price'
          type="text"
          name="price"
          value={product.price}
          onChange={handlepriceChange}
        />
         {error.quantity && <span className="add-product-error">{error.price}</span>}
      </div>
      <div className='btns'>
        <button onClick={handleCancel} className='btn-cancel'>Cancel</button>
        <button onClick={handleAddProduct} className='btn-add'>Add </button>
      </div>
    </div>
  );
}

export default Add_product;
