import { useState } from "react";
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

const Special = () => {
    const [cartItems, setCartItems] = useState({});
    const { addToCart } = useCart(); 
    const navigate = useNavigate(); 

    const handleAddToCart = (item) => {
        addToCart(item);  
        navigate('/cart'); 
    };

    const increment = (id) => {
        setCartItems(prev => ({
            ...prev,
            [id]: prev[id] + 1
        }));
    };

    const decrement = (id) => {
        setCartItems(prev => {
            const newCount = prev[id] - 1;
            if (newCount <= 0) {
                const updated = { ...prev };
                delete updated[id];
                return updated;
            }
            return {
                ...prev,
                [id]: newCount
            };
        });
    };

    const specials = [
        { id: 1, image: special1, title: 'sandwich', description: 'bread with meat and vegetables', price: '120 Rs', rating: '3.8' },
        { id: 2, image: special2, title: 'hot milk', description: 'hot milk with less sugar', price: '200 Rs', rating: '2.8' },
        { id: 3, image: special3, title: 'coffee ice cream', description: 'coffee with ice cream vanilla', price: '230 Rs', rating: '4.8' },
        { id: 4, image: special4, title: 'cappuccino', description: 'hot cappuccino', price: '120 Rs', rating: '3.8' },
        { id: 5, image: special5, title: 'moccacinno', description: 'hot moccacinno', price: '200 Rs', rating: '2.8' },
        { id: 6, image: special6, title: 'waffle ice cream', description: 'waffle with ice cream', price: '230 Rs', rating: '4.8' },
    ];

    return (
        <div className="special_component">
            <div className="container">
                <div className="section_header mb-5">
                    <h2>Special menu for <span>you</span></h2>
                </div>
                <div className="row gy-5">
                    {specials.map(item => (
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
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>{item.description}</p>
                                    {cartItems[item.id] ? (
                                        <div className="d-flex align-items-center gap-2">
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => decrement(item.id)}>
                                                <FaMinus size={12} />
                                            </button>
                                            <span>{cartItems[item.id]}</span>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Special;
