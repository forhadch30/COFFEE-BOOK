import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-white/50 fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink className={({ isActive }) => `text-base ${isActive ? " underline text-xl text-warning duration-1000 underline-offset-8" : ''}`} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => `text-base ${isActive ? " underline text-xl text-warning duration-1000 underline-offset-8" : ''}`} to="/coffees">Coffees</NavLink>
                        <NavLink className={({ isActive }) => `text-base ${isActive ? " underline text-xl text-warning duration-1000 underline-offset-8" : ''}`} to="/dashboard">Dashboard</NavLink>
                    </ul>
                </div>
                <NavLink to={'/'} className="text-xl">COFFEE_BOOK</NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    <NavLink className={({ isActive }) => `text-base ${isActive ? " underline text-xl text-warning duration-1000 underline-offset-8" : ''}`} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => `text-base ${isActive ? " underline text-xl text-warning duration-1000 underline-offset-8" : ''}`} to="/coffees">Coffees</NavLink>
                    <NavLink className={({ isActive }) => `text-base ${isActive ? " underline text-xl text-warning duration-1000 underline-offset-8" : ''}`} to="/dashboard">Dashboard</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;