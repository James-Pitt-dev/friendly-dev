import {NavLink} from "react-router" //same as link component but lets you do some styling on it
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const base = 'transition hover:text-blue-400'
    const active = 'glow text-blue-400 font-semibold'

    return ( 
        <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <NavLink to='/' className='flex items-center gap-2 text-lg font-bold text-blue-300'>
                    <FaLaptopCode className="text-blue-400 text-xl" />
                    <span>The Friendly Developer</span>
                </NavLink>

                {/* Desktop Nav */}
                {/* hidden on small screens, then once md, turn it into flex box */}
                <div className="hidden md:flex items-center gap-6"> 
                    <div className="space-x-4 text-sm text-gray-400">
                        <NavLink to='/' className={({isActive}) => isActive ? active : base}>Home</NavLink>
                        <NavLink to='/projects' className={({isActive}) => isActive ? active : base}>Projects</NavLink>
                        <NavLink to='/blog' className={({isActive}) => isActive ? active : base}>Blog</NavLink>
                        <NavLink to='/about' className={({isActive}) => isActive ? active : base}>About</NavLink>
                        <NavLink to='/contact' className={({isActive}) => isActive ? active : base}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;