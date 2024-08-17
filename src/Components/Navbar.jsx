import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const Navbar = () => {
    const { logout, user } = UseAuth();
  console.log(user)
    const links = (
        <>
        <li className="font-semibold">
            <NavLink to="/">Home</NavLink>
          </li>
        <li className="font-semibold">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        <li className="font-semibold">
            <NavLink to="/About">About</NavLink>
          </li>
       
        </>
    )
    return (
        <div className="navbar bg-gray-200 px-4">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>
          <img className="w-[10%] h-[10%]" src="" alt="" />
         <p className="text-2xl font-sans font-semibold">ProductPulse</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              {links}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
        {
          user?(<div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
              
               alt="" src={user?.photoURL || 'https://cdn-icons-png.freepik.com/256/709/709699.png?semt=ais_hybrid'}
               referrerPolicy="no-referrer" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li><p className="font-bold">{user.displayName ||"Name not founded"}</p></li>
           
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </div>):(<Link to="/login">
            <button className=" p-4 text-center  rounded-2xl bg-orange-600 text-white font-semibold text-xm mx-auto">
              Login
            </button>
          </Link>)}
        
         
        
          
      
        </div>
      </div>
    );
};

export default Navbar;