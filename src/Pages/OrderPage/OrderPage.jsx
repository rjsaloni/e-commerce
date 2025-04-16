// src/pages/OrderPage.jsx
import { CiShoppingCart } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext"; 

import special1 from '../../assets/special/special_1.png';
import special2 from '../../assets/special/special_2.png';
import special3 from '../../assets/special/special_3.png';
import special4 from '../../assets/special/special_4.png';
import special5 from '../../assets/special/special_5.png';
import special6 from '../../assets/special/special_6.png';
import popular1 from '../../assets/popular/popular_1.png';
import popular2 from '../../assets/popular/popular_2.png';
import popular3 from '../../assets/popular/popular_3.png';

const OrderPage = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, increment, decrement } = useCart(); 

  const handleAddToCart = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  const specials = [
    { id: 1, image: special1, title: 'Sandwich', description: 'Bread with meat and vegetables', price: 120, rating: '3.8' },
    { id: 2, image: special2, title: 'Hot Milk', description: 'Hot milk with less sugar', price: 200, rating: '2.8' },
    { id: 3, image: special3, title: 'Coffee Ice Cream', description: 'Coffee with vanilla ice cream', price: 230, rating: '4.8' },
    { id: 4, image: special4, title: 'Cappuccino', description: 'Hot cappuccino', price: 120, rating: '3.8' },
    { id: 5, image: special5, title: 'Moccacinno', description: 'Hot moccacinno', price: 200, rating: '2.8' },
    { id: 6, image: special6, title: 'Waffle Ice Cream', description: 'Waffle with ice cream', price: 230, rating: '4.8' },
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
    <div className="order_component">
      <div className="container">
        <div className="row gy-5">
          {specials.map(item => {
            const inCart = cartItems.find(ci => ci.id === item.id);
            return (
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
                    <span>{item.price} Rs</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>{item.description}</p>
                    {inCart ? (
                      <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-sm btn-outline-danger" onClick={() => decrement(item.id)}>
                          <FaMinus size={12} />
                        </button>
                        <span>{inCart.quantity}</span>
                        <button className="btn btn-sm btn-outline-success" onClick={() => increment(item.id)}>
                          <FaPlus size={12} />
                        </button>
                      </div>
                    ) : (
                      <button className="common_cart" onClick={() => handleAddToCart(item)}>
                        <CiShoppingCart fontSize="1.5rem" color="#fff" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
