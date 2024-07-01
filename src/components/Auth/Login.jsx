import { useContext, useState } from "react";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";


const Login = () => {
    const [show_1, setShow_1] = useState(false);
    const [error, setError] = useState('')




    const handleShow_1 = () =>{
        setShow_1(!show_1)
    }

    const {googleLogin, loginUser} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        loginUser(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
        })
        .catch(error =>{
            console.log(error);
            setError(error.message)
        })


    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    
    return (
        <div className="max-w-lg mx-auto mt-12 px-1">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login - Khan-home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <form onSubmit={handleLogin} className="border-2 border-[#bc986b] px-6 py-10 space-y-6 bg-[#fefbf8]">
                <h2 className="text-center font-semibold text-xl sm:text-3xl lg:text-4xl mainColor">Login Your Account</h2>

                <input className="w-full p-2 outline-none border border-[#bc986b] rounded-sm focus:ring-1 ring-[#bc986b]" type="email" name="email" placeholder="Your Email" />

                <div className="relative">
                <input className="w-full p-2 outline-none border border-[#bc986b] rounded-sm focus:ring-1 ring-[#bc986b]"  type={show_1 ? 'text' : 'password'} name="password" placeholder="Password" />

                <div onClick={handleShow_1} className="text-xl absolute top-2.5 right-2 mainColor">
                {
                    show_1 ? <FaRegEye /> : <FaRegEyeSlash />
                }
                </div>

                </div>

                <input type="submit" value="Login Your Account"  className="w-full p-2 border border-[#bc986b] rounded-sm font-semibold text-white hover:text-[#bc986b] bg-[#bc986b] hover:bg-transparent duration-200"/>
                <p className="text-sm text-center text-gray-600">New here ? <Link to='/register' className="font-semibold mainColor">Register</Link></p>
                <div className="flex items-center justify-center *:text-2xl mainColor space-x-4 *:cursor-pointer">
                <FaGoogle onClick={handleGoogleLogin} className="hover:text-black"/>
                <FaGithub className="hover:text-black"/>
                <FaTwitter className="hover:text-black"/>
                </div>
                <p className="text-red-500 text-center">{error}</p>
            </form>     
        </div>
    );
};

export default Login;