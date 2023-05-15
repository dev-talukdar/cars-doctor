import { FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {
    const {title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl font-bold text-orange-500">Price : ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-warning">Buy Now <FaArrowRight className='ml-5'/> </button>
                </div>
            </div>
        </div>
    );  
};

ServiceCard.propTypes = {
    service: PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

export default ServiceCard;