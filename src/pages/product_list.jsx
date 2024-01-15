// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FaRegBell } from 'react-icons/fa';
import { LuPencil, LuTrash } from 'react-icons/lu';
import { IoSearch } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import Edit from './Edit';

Modal.setAppElement('#root');

function product_list() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchTerm, setSearchTerm] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedProductId, setSelectedProductId] = useState(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = 'https://academy-batch-1-project-683989f58497.herokuapp.com/api/admin/products/search';
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const searchApiUrl = `https://academy-batch-1-project-683989f58497.herokuapp.com/api/admin/products/search?q=${searchTerm}`;
      const searchResponse = await fetch(searchApiUrl);

      if (!searchResponse.ok) {
        throw new Error(`Error searching products: ${searchResponse.status}`);
      }
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  const handleAddProduct = () => {
    history.push('/add-product');
  };

  const handleEditProduct = (productId) => {
    setSelectedProductId(productId);
    setIsEditModalOpen(true);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`https://academy-batch-1-project-683989f58497.herokuapp.com/api/admin/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error deleting product: ${response.status}`);
      }

      const data = await response.json();
      console.log('Product deleted successfully', data);

      // Refetch products after deletion
      const fetchApiUrl = 'https://academy-batch-1-project-683989f58497.herokuapp.com/api/admin/products/search';
      const fetchResponse = await fetch(fetchApiUrl);

      if (!fetchResponse.ok) {
        throw new Error(`Error fetching products: ${fetchResponse.status}`);
      }

      const fetchData = await fetchResponse.json();
      setProducts(fetchData);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProductId(null);
  };
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
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search among 1080 products"
      />
      <IoSearch className='search-icon' onClick={handleSearch}/>
    </div>

    <button   onClick={handleAddProduct} className='btn-add-product'>Add Product+ </button>
    </div>
    <div className='product-listing-part'>
      <div className='properties'>
     <h6>Image</h6>
     <h6>Product Name</h6>
     <h6>Price</h6>
     <h6>Quantity</h6>
     
     <h6> </h6>
     </div>
     {
     products?.map((product) => (
          <div key={product.id} className='product'>
            {/* Display product information */}
            {/* Add your product image, name, price, quantity, and date added as needed */}
            <img src={product.image}  className='product-image' />
            <p className='product-name'>{product.name}</p>
            <p className='price'>{product.price}</p>
            <p className='quantity'>{product.quantity}</p>
           
            
            {/* Actions (Edit and Delete icons) */}
            <div className='actions'>
              
              <LuPencil className='edit-icon'  onClick={() => {
    console.log('Edit icon clicked for product:', product);
    handleEditProduct(product.id);
  }}/>
              <LuTrash className='delete-icon' onClick={() => handleDeleteProduct(product.id)}  />
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
    {/* Add/Edit Modal */}
    <Modal isOpen={isEditModalOpen} onRequestClose={handleCloseEditModal} contentLabel="Edit Product Modal">
        {/* Render your Edit component here with selectedProductId */}
        {selectedProductId && <Edit productId={selectedProductId} onClose={handleCloseEditModal} />}
      </Modal>
    </div>
  )
}

export default product_list
