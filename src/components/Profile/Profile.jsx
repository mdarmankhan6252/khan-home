import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="border w-[350px] mx-auto px-5 py-10 shadow rounded-lg mt-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile - Khan-home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {
                user.photoURL ? 
                <div className="flex justify-center">
                    <img src={user.photoURL} alt="" className="w-24 rounded-full"/>
                </div>
                :
                <div className="flex justify-center my-8">
                    <FaRegUserCircle className="text-7xl" />
                </div>
            }
            {
                user.displayName ? <h4 className="text-xl text-center py-4 font-semibold">{user.displayName}</h4>
                :
                <h4 className="text-xl text-center py-4 font-semibold text-red-500">No name was given</h4>

            }
            {
                user && <p className="text-center text-xl font-light text-amber-600">{user.email}</p>
            }
            
            

        </div>
    );
};

export default Profile;