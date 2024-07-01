
import { FaArrowLeft, FaVectorSquare } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { MdWash } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";

const FeatureDetails = () => {
    const { id } = useParams();
    const data = useLoaderData()
    const details = data?.find(d => d.id == id);
    const { title, image, description, sq_ft, bedrooms, bathrooms, garage } = details;
    return (
        <div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-light text-center pt-10 playWrite ">Features Details of {id}</h2>

            <div className="max-w-2xl mx-auto mt-16">
                <Link to='/'><FaArrowLeft className="text-3xl text-blue-500 mb-6 cursor-pointer" /></Link>
                <img src={image} alt="" className="w-full rounded-xl" />
                <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl py-5">{title}</h2>

                <p className="text-[#5c5a5a] leading-8 text-justify">{description}</p>

                <div className="flex items-center justify-between mt-6 *:space-y-2">
                    <div className="flex items-center justify-between gap-10">
                        <div className="text-gray-600 flex items-center space-x-2">
                            <FaVectorSquare />
                            <span>{sq_ft} Sq Ft</span>
                        </div>
                        <div className="text-gray-600 flex items-center space-x-2">
                            <IoBedOutline />
                            <span>{bedrooms} Bedrooms</span>
                        </div>
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



        </div>
    );
};

export default FeatureDetails;