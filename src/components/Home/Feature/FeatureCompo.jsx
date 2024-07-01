import { FaVectorSquare } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { MdWash } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FeatureCompo = ({home}) => {
    const {id,title, image, price, bathrooms, garage, bedrooms, sq_ft} = home;
    
    
    return (
            <Link to={`/feature/${id}`}>
            <div id="featureBack" className="border p-5 shadow rounded-lg hover:bg-[#fef9f2] ">
                <div className="relative overflow-hidden">
                <img src={image} alt="" className="w-full hover:scale-105 duration-500"/>
                <p className="absolute bottom-0 left-0 bg-[#bc986b] px-4 py-1 font-semibold text-white italic">{price} \ mo</p>
                </div>
                <h3 className="font-semibold mainColor  py-4 text-lg">{title}</h3>
                <hr />
                <div className="flex items-center justify-between p-2 *:space-y-2">
                    <div>
                        <div className="text-gray-600 flex items-center space-x-2">
                        <FaVectorSquare />
                        <span>{sq_ft} Sq Ft</span>
                        </div>
                        <div className="text-gray-600 flex items-center space-x-2">
                        <IoBedOutline />
                        <span>{bedrooms} Bedrooms</span>
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-600 flex items-center space-x-2">
                        <MdWash />
                        <span>{bathrooms} Bathrooms</span>
                        </div>
                        <div className="text-gray-600 flex items-center space-x-2">
                        <GiHomeGarage />
                        <span>{garage} Garage</span>
                        </div>
                    </div>
                </div>

            </div>
            </Link>
    );
};

export default FeatureCompo;

FeatureCompo.propTypes = {
    home:PropTypes.node
}