import { Link } from "react-router-dom"; 
import { CiShoppingCart } from "react-icons/ci";
import heroImage from "../../assets/banner/img-hero.png";

const Banner = () => {
    return (
        <div className="banner_component d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    {/* Content Section */}
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-5 mb-lg-0">
                        <div className="banner_content">
                            <h2 className="banner_title">Enjoy your <span className="highlight">coffee</span> before your activity</h2>
                            <p className="banner_description">Boost your productivity and build your mood with a glass of coffee in the morning.</p>

                            <div className="btn_box">
                                <Link to="/order" className="common_btn">
                                    Order Now <CiShoppingCart fontSize="1.5rem" />
                                </Link>
                                <Link to="/menu" className="transparent_btn">
                                    More Menu
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image Section */}
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="banner_img">
                            <img src={heroImage} alt="hero image" className="img-fluid animate__animated animate__zoomIn" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
