import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  
import { useCart } from "../../context/CartContext";  

import popular1 from '../../assets/popular/popular_1.png';
import popular2 from '../../assets/popular/popular_2.png';
import popular3 from '../../assets/popular/popular_3.png';

const Popular = () => {
  const { addToCart, increment, decrement, cartItems } = useCart(); 
  const [variants, setVariants] = useState({});
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    const item = popular.find(i => i.id === id);
    addToCart(item);
    navigate('/cart');  
  };

  const selectVariant = (id, type) => {
    setVariants(prev => ({
      ...prev,
      [id]: type
    }));
  };

  const popular = [
    {
      id: 1,
      image: popular1,
      title: 'Vanilla Latte',
      price: '200 Rs',
      rating: '3.8'
    },
    {
      id: 2,
      image: popular2,
      title: 'Espresso',
      price: '100 Rs',
      rating: '2.8'
    },
    {
      id: 3,
      image: popular3,
      title: 'Hazelnut Latte',
      price: '300 Rs',
      rating: '4.8'
    },
  ];

  return (
    <div className="popular_component">
      <div className="container">
        <div className="section_header mb-5">
          <h2>Popular <span>now</span></h2>
        </div>

        <div className="popular_container">
          <div className="row gy-5">
            {popular.map(item => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-12">
                <div className="popular_content">
                  <div className="popular_image position-relative">
                    <img src={item.image} alt={item.title} />
                    <div className="popular_rating">
                      <button className="d-flex align-items-center justify-content-center gap-1">
                        {item.rating} <IoIosStar color="#ff902b" />
                      </button>
                    </div>
                  </div>
                  <div className="card_info d-flex align-items-center justify-content-between">
                    <h3>{item.title}</h3>
                    <span>{item.price}</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="popular_variant d-flex align-items-center gap-3">
                      <button
                        className={`btn btn-sm ${variants[item.id] === 'hot' ? 'btn-orange' : 'btn-outline-orange'}`}
                        onClick={() => selectVariant(item.id, 'hot')}
                      >
                        Hot
                      </button>
                      <button
                        className={`btn btn-sm ${variants[item.id] === 'cold' ? 'btn-orange' : 'btn-outline-orange'}`}
                        onClick={() => selectVariant(item.id, 'cold')}
                      >
                        Cold
                      </button>
                    </div>

                    {cartItems.find(ci => ci.id === item.id) ? (
                      <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-sm btn-outline-danger" onClick={() => decrement(item.id)}>
                          <FaMinus size={12} />
                        </button>
                        <span>{cartItems.find(ci => ci.id === item.id).quantity}</span>
                        <button className="btn btn-sm btn-outline-success" onClick={() => increment(item.id)}>
                          <FaPlus size={12} />
                        </button>
                      </div>
                    ) : (
                      <button className="common_cart" onClick={() => handleAddToCart(item.id)}>
                        <CiShoppingCart fontSize="1.5rem" color="#fff" />
                      </button>
                    )}
                  </div>
                  {variants[item.id] && (
                    <p className="mb-0"><small>Selected: {variants[item.id]}</small></p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
