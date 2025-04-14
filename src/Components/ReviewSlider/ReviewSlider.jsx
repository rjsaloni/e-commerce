import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import review1 from '../../assets/reviews/review_1.jpg';
import review2 from '../../assets/reviews/review_2.jpg';
import review3 from '../../assets/reviews/review_3.jpg';

const ReviewSlider = () => {

    const reviews = [
        {
            id: 1,
            name: 'Naura',
            review: 'I really love the cappucino. the coffee was very smooth',
            image: review1
        },
        {
            id: 2,
            name: 'John',
            review: 'this coffee shop is very convenient',
            image: review2
        },
        {
            id: 3,
            name: 'Azura',
            review: 'the coffee menu here is very much',
            image: review3
        },
        {
            id: 4,
            name: 'Naura',
            review: 'I really love the cappucino. the coffee was very smooth',
            image: review1
        },
        {
            id: 5,
            name: 'John',
            review: 'this coffee shop is very convenient',
            image: review2
        },
        {
            id: 6,
            name: 'Azura',
            review: 'the coffee menu here is very much',
            image: review3
        },
    ]

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    reviews?.map(item => {
                        return (
                            <div key={item?.id} className="slider_item">
                                <img src={item?.image} alt={item?.name} />
                                <div className="review_info">
                                    <h4>{item?.name}</h4>
                                    <p>{item?.review}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </Slider>
        </div>
    );
};

export default ReviewSlider;
