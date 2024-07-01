import { useContext, useState } from "react";
import { GiGreenhouse } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

 
const Nav = () => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () =>{
        setMenu(!menu)
    }
    const {user} = useContext(AuthContext)
    return (
        <nav className="bg-white sticky -top-[1px] left-0 right-0 z-10 shadow">
            <div className="py-4 flex items-center justify-between max-w-6xl mx-auto relative">
            <Link to='/' className="flex items-center space-x-2">
            <GiGreenhouse className="text-3xl mainColor "/>
            <p className="leading-4 font-semibold mainColor">Khan's <br/>Home</p>
            </Link>
            <ul className="space-x-6 font-semibold sm:block hidden">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                { !user &&
                    <NavLink to='/login'>Login</NavLink>
                }
                { user &&
                    <NavLink to='/profile'>Profile</NavLink>
                }
            </ul>
            <div onClick={handleMenu} className="text-2xl relative sm:hidden">
                {
                    menu ? <IoCloseOutline /> : <CiMenuBurger />
                }
            
            
            </div>
            <ul className={`font-semibold *:block *:py-3 *:pl-4 *:pr-10 *:bg-gray-50 border z-20 absolute right-5 top-11 ${menu ? 'block' : 'hidden'} sm:hidden`}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                { !user &&
                    <NavLink to='/login'>Login</NavLink>
                }
                { user &&
                    <NavLink to='/profile'>Profile</NavLink>
                }
            </ul>



        </div>
        </nav>
    );
};

export default Nav;