import { useNavigate } from 'react-router-dom'; 
import { useCart } from '../../context/CartContext';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, increment, decrement, removeItem } = useCart();
  const navigate = useNavigate();

  const getItemTotal = (price, quantity) => {
    const p = parseFloat(price) || 0;
    const q = parseInt(quantity) || 0;
    return p * q;
  }

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + getItemTotal(item.price, item.quantity),
    0
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => {
          const itemTotal = getItemTotal(item.price, item.quantity);

          return (
            <div
              key={item.id}
              className="card mb-3 p-3 d-flex flex-row align-items-center justify-content-between"
              style={{ boxShadow: '0 0 10px rgba(0,0,0,0.05)', borderRadius: '8px' }}
            >
              <div className="d-flex align-items-center gap-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '6px'
                    }}
                  />
                )}
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-1">
                    Price: <strong>{parseFloat(item.price) || 0} Rs</strong>
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      onClick={() => decrement(item.id)}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increment(item.id)}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-end">
                <p className="mb-1">
                  Total: <strong>{itemTotal.toFixed(2)} Rs</strong>
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn btn-sm btn-danger d-flex align-items-center gap-1"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          );
        })
      )}

      {cartItems.length > 0 && (
        <div className="text-end mt-4">
          <h4>
            Total Amount: <strong>{totalAmount.toFixed(2)} Rs</strong>
          </h4>
          <button
            className="btn btn-success mt-2"
            onClick={() => navigate('/Delivery')} 
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
