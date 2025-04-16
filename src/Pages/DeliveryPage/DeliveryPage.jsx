import { FaMotorcycle, FaBoxOpen, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const DeliveryPage = () => {
  return (
    <div className="container mt-5 py-4">
      <div className="text-center mb-4">
        <h2 className="fw-bold">🚚 Delivery Information</h2>
        <p className="text-muted">We ensure your order reaches you fast and safely.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card p-3 shadow-sm h-100">
            <div className="d-flex align-items-center gap-3 mb-2">
              <FaMotorcycle size={28} color="#007bff" />
              <h5 className="mb-0">Home Delivery</h5>
            </div>
            <p className="text-muted">Fast doorstep delivery by trained delivery agents across the city.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card p-3 shadow-sm h-100">
            <div className="d-flex align-items-center gap-3 mb-2">
              <FaBoxOpen size={28} color="#28a745" />
              <h5 className="mb-0">Free Delivery</h5>
            </div>
            <p className="text-muted">Enjoy free shipping on orders above ₹500. No hidden charges!</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card p-3 shadow-sm h-100">
            <div className="d-flex align-items-center gap-3 mb-2">
              <FaClock size={28} color="#ffc107" />
              <h5 className="mb-0">30–45 Min Delivery</h5>
            </div>
            <p className="text-muted">We value your time. Most orders are delivered within 30–45 minutes.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card p-3 shadow-sm h-100">
            <div className="d-flex align-items-center gap-3 mb-2">
              <FaMapMarkerAlt size={28} color="#dc3545" />
              <h5 className="mb-0">Wide Coverage</h5>
            </div>
            <p className="text-muted">Now delivering to over 100+ areas. Check your pin code for availability.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card p-3 shadow-sm h-100">
            <div className="d-flex align-items-center gap-3 mb-2">
              <FaCheckCircle size={28} color="#6f42c1" />
              <h5 className="mb-0">Trusted Service</h5>
            </div>
            <p className="text-muted">Backed by thousands of happy customers. 100% safe & reliable delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
