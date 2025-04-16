import { NavLink, Link } from 'react-router-dom';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useCart } from '../../../context/CartContext';

const Desktop = ({ openMenu, setMenu }) => {
  const { cartItems } = useCart();

  return (
    <div className="d-flex align-items-center gap-5">
      <nav className="d-none d-lg-flex align-items-center gap-4 navigationbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
        <NavLink to="/order" className={({ isActive }) => (isActive ? 'active' : '')}>Our Product</NavLink>
        <NavLink to="/delivery" className={({ isActive }) => (isActive ? 'active' : '')}>Delivery</NavLink>
      </nav>

      <div className="desktop_right_wrapper d-flex align-items-center gap-4">
                <form action="#" className="d-none d-lg-block">
                    <input type="text" placeholder="Cappuccino" />
                    <button> <CiSearch fontSize='1.5rem' color="#000000" /> </button>
                </form>
            </div>


      <Link to="/cart" className="position-relative">
        <CiShoppingCart size={30} />
        {cartItems.length > 0 && (
          <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItems.length}
          </span>
        )}
      </Link>

      <button onClick={() => setMenu(!openMenu)} className="d-block d-lg-none">
        <FaBarsStaggered size={30} color="#000000" />
      </button>
    </div>
  );
};

export default Desktop;
