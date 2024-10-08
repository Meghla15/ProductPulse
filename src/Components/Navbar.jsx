import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const Navbar = () => {
    const { logout, user } = UseAuth();
      
  console.log(user)

  
  
    return (
        <div className="navbar bg-indigo-950 px-4">

        <div className="navbar-start">
          
          <img className="w-[10%] h-[10%]" src="https://static.vecteezy.com/system/resources/previews/027/375/023/original/shopping-cart-flat-icon-in-circle-png.png" alt="" />
      <Link to='/'>   <p className="lg:text-3xl text-2xl font-sans font-bold text-white ml-1">ProductPulse</p></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
          </ul>
        </div>
      
        
        
        <div className="navbar-end space-x-2">
        <div className="flex-none gap-2">
       
        </div>
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