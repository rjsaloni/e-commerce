import { CiShoppingCart } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import popular1 from '../../assets/popular/popular_1.png';
import popular2 from '../../assets/popular/popular_2.png';
import popular3 from '../../assets/popular/popular_3.png';

const Popular = () => {

    const popular = [
        {
            id: 1,
            image: popular1,
            title: 'vanilla latte',
            price: '200 Rs',
            rating: '3.8'
        },
        {
            id: 2,
            image: popular2,
            title: 'espresso',
            price: '100 Rs',
            rating: '2.8'
        },
        {
            id: 3,
            image: popular3,
            title: 'hazelnut latte',
            price: '300 Rs',
            rating: '4.8'
        },
    ];

    return (
        <div className="popular_component">
            <div className="container">
                {/* section header  */}
                <div className="section_header mb-5">
                    <h2>Popular <span>now</span></h2>
                </div>

                <div className="popular_container">
                    <div className="row gy-5">
                        {
                            popular?.map(item => (
                                <div key={item?.id} className="col-xl-4 col-lg-4 col-md-12">
                                    <div className="popular_content">
                                        <div className="popular_image">
                                            <img src={item?.image} alt={item?.title} />
                                            <div className="popular_rating">
                                                <button className="d-flex align-items-center justify-content-center gap-1">
                                                    {item?.rating} <IoIosStar color="#ff902b" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card_info d-flex align-items-center justify-content-between">
                                            <h3>{item?.title}</h3>
                                            <span>{item?.price}</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="popular_variant d-flex align-items-center gap-3">
                                                <button>hot</button>
                                                <button>col</button>
                                            </div>
                                            <button className="common_cart">
                                                <CiShoppingCart fontSize='1.5rem' color="#fff" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;
