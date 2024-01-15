// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function Edit({ productId, onClose }) {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    quantity: 0,
    price: 0,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const apiUrl = `https://academy-batch-1-project-683989f58497.herokuapp.com/api/admin/products/${productId}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Error fetching product: ${response.status}`);
        }

        const data = await response.json();

        // Set the form data with the retrieved product details
        setFormData({
          image: data.data.image,
          name: data.data.name,
          quantity: data.data.quantity,
          price: data.data.price,
        });
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditProduct = async () => {
    try {
      const apiUrl = `https://academy-batch-1-project-683989f58497.herokuapp.com/api/admin/products/${productId}`;
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error updating product: ${response.status}`);
      }

      const data = await response.json();
      console.log('Product updated successfully', data);

      // Optionally, you can perform actions like closing the modal or updating the product list
      onClose();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className='edit-product-page'>
      <h2 className='edit-h2'>Edit Product</h2>
      <form className='edit-form'>
        <label className='edit-label'>
          Image:
          <input
            className='edit-input'
            type='text'
            name='image'
            value={formData.image}
            onChange={handleInputChange}
          />
        </label>
        <label className='edit-label'>
          Name:
          <input
            className='edit-input'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label className='edit-label'>
          Quantity:
          <input
            className='edit-input'
            type='number'
            name='quantity'
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <label className='edit-label'>
          Price:
          <input
            className='edit-input'
            type='number'
            name='price'
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <button className='edit-button' type='button' onClick={handleEditProduct}>
          Update Product
        </button>
      </form>
    </div>
  );
}

export default Edit;
