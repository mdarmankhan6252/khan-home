import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { TfiNotepad } from "react-icons/tfi";


const Info = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 ">
            <div className="border-4 border-gray-100 p-6 hover:border-[#f0c998] duration-200">
            <div className="text-5xl mainColor border-4 border-gray-100 inline-block p-2 rounded-full">
            <IoLocationOutline/>
            </div>
            <h4 className="text-2xl">Various Locations</h4>
            <p className="text-gray-600">We have lots of properties in various locations available for purchase.</p>
            </div>
            <div className="border-4 border-gray-100 p-6 hover:border-[#f0c998]">
            <div className="text-5xl mainColor border-4 border-gray-100 inline-block p-2 rounded-full duration-200 *:p-1">
            <TfiNotepad />
            </div>
            <h4 className="text-2xl">No Commission</h4>
            <p className="text-gray-600">Opportunity to acquire a quality apartment for rent without having to pay any commission.</p>
            </div>
            <div className="border-4 border-gray-100 p-6 hover:border-[#f0c998] duration-200">
            <div className="text-5xl mainColor border-4 border-gray-100 inline-block p-2 rounded-full">
            <CiSearch />
            </div>
            <h4 className="text-2xl">View Apartments</h4>
            <p className="text-gray-600">View apartment listings with photos, HD videos, virtual tours, 3D floor plans etc.</p>
            </div>
        </div>
    );
};

export default Info;