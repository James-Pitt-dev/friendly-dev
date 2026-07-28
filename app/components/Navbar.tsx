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

                {/* Desktop Nav (displayed on md screens and up, hiddon on smaller)*/}
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
                {/* Mobile Nav Icon toggle icon(displayed on sm screens and hiddeon on md and up) */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={() => setMenuOpen(!menuOpen)} title='Menu' className="text-blue-400 text-xl cursor-pointer">
                        {menuOpen ? <FaTimes /> : <FaBars /> }
                    </button>
                </div>
            </div>
                 {/* Mobile Nav (displayed on sm screens and hiddeon on md and up), hide drop down menu once link is clicked */}
                {
                    menuOpen && (
                        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
                            <NavLink to='/' className={({isActive}) => isActive ? active : base} onClick={() => setMenuOpen(false)}>Home</NavLink>
                            <NavLink to='/projects' className={({isActive}) => isActive ? active : base} onClick={() => setMenuOpen(false)}>Projects</NavLink>
                            <NavLink to='/blog' className={({isActive}) => isActive ? active : base} onClick={() => setMenuOpen(false)}>Blog</NavLink>
                            <NavLink to='/about' className={({isActive}) => isActive ? active : base} onClick={() => setMenuOpen(false)}>About</NavLink>
                            <NavLink to='/contact' className={({isActive}) => isActive ? active : base} onClick={() => setMenuOpen(false)}>Contact</NavLink>
                        </div>
                    )
                }
        </nav>
     );
}
 
export default Navbar;