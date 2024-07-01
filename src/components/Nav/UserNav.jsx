import { useContext } from "react";
import { FaUserCircle, FaUserTimes } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoIosLogOut } from "react-icons/io";


const UserNav = () => {
    const {user, logOut} = useContext(AuthContext);
    
    return (
        <div className="max-w-6xl mx-auto flex items-center justify-between py-2">
            <div className="font-semibold space-x-6 text-sm mainColor flex items-center ">
                <div className="flex items-center space-x-1">
                <IoCall className="text-lg"/><span>+880 1875778050</span>
                </div>
                <div className="flex items-center space-x-1">
                <MdOutlineMail className="text-lg"/>
                <span>info@arman.org</span>
                </div>
            </div>
            <div>
                {
                    user ? <div className="flex items-center space-x-2">
                    {
                        user.photoURL ? <img className="w-9 rounded-full border-2 border-white ring-2 ring-[#bc986b]" src={user.photoURL} alt="" /> : <FaUserCircle className="mainColor text-2xl pr-1 " />
                    }
                    <IoIosLogOut onClick={() => logOut().then().catch()} className="mainColor text-3xl pr-1 cursor-pointer"/>
                    </div>
                    : 
                    <FaUserTimes className="mainColor text-2xl pr-1 "/>
                }
               
            </div>                                   
        </div>
    );
};

export default UserNav;