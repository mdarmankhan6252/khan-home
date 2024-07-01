import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";


const Register = () => {
    const [show_1, setShow_1] = useState(false)
    const [show_2, setShow_2] = useState(false)
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    const handleShow_1 = () =>{
        setShow_1(!show_1)
    }
    const handleShow_2 = () =>{
        setShow_2(!show_2)
    }

    const {createUser} = useContext(AuthContext);

    const handleCreateUser = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setErr('')
        setSuccess('')
        createUser(email, password)
        .then(result =>{
            console.log(result);
            e.target.reset()
            setSuccess('Successful')

        })
        .catch(error =>{
            console.log(error);
            setErr(error.message)

        })

    }
    return (
        <div className="max-w-lg mx-auto mt-12 px-1">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register - Khan-home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <form onSubmit={handleCreateUser} className="border-2 border-[#bc986b] px-6 py-10 space-y-6 bg-[#fefbf8]">
                <h2 className="text-center font-semibold text-xl sm:text-3xl lg:text-4xl mainColor">Create an Account</h2>
                <input className="w-full p-2 outline-none border border-[#bc986b] rounded-sm focus:ring-1 ring-[#bc986b]" type="text" name="name" placeholder="Your name" />
                <input className="w-full p-2 outline-none border border-[#bc986b] rounded-sm focus:ring-1 ring-[#bc986b]" type="email" name="email" placeholder="Your Email" />

                <div className="relative">
                <input className="w-full p-2 outline-none border border-[#bc986b] rounded-sm focus:ring-1 ring-[#bc986b]"  type={show_1 ? 'text' : 'password'} name="password" placeholder="Password" />

                <div onClick={handleShow_1} className="text-xl absolute top-2.5 right-2 mainColor">
                {
                    show_1 ? <FaRegEye /> : <FaRegEyeSlash />
                }
                </div>

                </div>
                <div className="relative">
                <input className="w-full p-2 outline-none border border-[#bc986b] rounded-sm focus:ring-1 ring-[#bc986b]"  type={show_2 ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" />

                <div onClick={handleShow_2} className="text-xl absolute top-2.5 right-2 mainColor">
                {
                    show_2 ? <FaRegEye /> : <FaRegEyeSlash />
                }
                </div>

                </div>

                <input type="submit" value="Create an Account"  className="w-full p-2 border border-[#bc986b] rounded-sm font-semibold text-white hover:text-[#bc986b] bg-[#bc986b] hover:bg-transparent duration-200"/>
                <p className="text-sm text-center text-gray-600">Already have an account ? <Link to='/login' className="font-semibold mainColor">Login</Link></p>
                <p className="text-center text-red-500">{err}</p>
                <p className="text-center text-green-500">{success}</p>
            </form>     
        </div>
    );
};

export default Register;