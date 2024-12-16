import appLogo from "/public/assets/menu-02.svg";
import solarBag from "/public/assets/solar_bag.svg";
import LogImage from "/logoImage.png";
import menuItem from "/menu2.svg";
import { Link } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import { auth } from "../../firebase";
import { RootState } from "../context/redux/configureStore";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { UserContext } from "../context/contextApi/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  
  const {isMenuOpen,setIsMenuOpen,cartItems}=useContext(UserContext)!
  let {currentUser}=useSelector((state:RootState)=>state.user)

  let userStatus=localStorage.getItem("status")
  



  return (
    <div className=" w-full flex flex-row justify-center items-center bg-[#1A2859]">
      <div className="w-full md:w-[85%] md:my-7 h-16 bg-white flex flex-row items-center md:rounded-md align-middle p-2 md:p-5 md:px-10 justify-between">
        {/* -------------- Logo ---------------- */}
        <Link to={"/"}>
        <div className="w-40 h-9 flex flex-row items-center justify-between">
          <img src={LogImage} className="h-8 me-3" alt="FlowBite Logo" />
          <h2 className="w-32 h-full text-2xl font-normal text-blue-500">
            MART<span className="text-yellow-400">FLUX</span>
          </h2>
          <img src={appLogo} alt="icon" className="hidden md:block ml-5" />
        </div>
        </Link>
        

        {/* --------------search bar---------------------- */}
        {/* <div className="hidden w-80 h-10  lg:flex flex-row items-center rounded-lg overflow-hidden">
          <input
            type="text"
            className="h-full outline-none p-2 border-gray-300 border overflow-hidden"
          />
          <div className="bg-[#C4CEF3] text-black h-full p-2">
            <img src={searchIcon} alt="" className="h-full w-7" />
          </div>
        </div> */}
        {/* menu items */}
        <div className="hidden md:flex">
          <ul className="flex flex-row items-center w-full ml-4">
            <Link to={"/"} className="hover:bg-blue-200 rounded-md">
              <li className="h-full text-blue  p-2 mr-2 rounded-md text-lg text-center w-full">
                Home
              </li>
            </Link>

            <Link to={"marketplace"}>
              <li className="h-full text-blue  p-2 mr-2 rounded-md text-lg">
                Shop{" "}
              </li>
            </Link>
            <Link to={"aboutUs"}>
              <li className="h-full text-blue  p-2 mr-2 rounded-md text-lg">
                About
              </li>
            </Link>
            {
            userStatus === "vendor" ?
                 <Link to={"dashboardLayout"}>
                 <li className="h-full text-blue  p-2 mr-2 rounded-md text-lg">
                   Dashboard
                 </li>
               </Link>: null
            }
          </ul>
        </div>
        {/* ------------------cart icon  ----------------------------- */}
        <div className="flex flex-row justify-between items-center md:w-96">
          <select className="hidden md:block outline-none bg-transparent text-white">
            <option value="usa">Usa</option>
          </select>

          <div className="flex flex-row mr-4 md:mr-0">
            <img src={solarBag} alt="icon" />
            <span className="text-white ml-2">0</span>
          </div>
            {currentUser ?  
           <div className="hidden md:flex flex-row items-center justify-between w-[50%] h-11 rounded-md text-black bg-white shadow-md px-4">
           <div className="relative flex items-center">
             <Link to={'checkout'}>
                <FaCartShopping className="text-gray-700 text-2xl hover:text-blue-500 transition-colors" />
             </Link>
             
             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
               {cartItems.length}
             </span>
           </div>

          
           <button
             className="w-[50%] flex items-center justify-center h-[80%] rounded-md border border-[#F3C300] hover:bg-blue-500 hover:text-white transition-colors"
             onClick={()=> {
              auth.signOut()
              localStorage.removeItem("status")
             }}
           >
             <button className="w-full h-full font-medium">Sign Out</button>
           </button>
         </div>
          :

          <div className="hidden md:flex flex-row items-center justify-between w-[60%] h-9 rounded-md text-black">
            <Link
              to={"createAccount"}
              className="w-[40%] border-[#F3C300] border h-full rounded-md hover:bg-blue-200 hover:border-none"
            >
              <button className="w-full border h-full">Sign Up</button>
            </Link>
            <Link
              to={"login"}
              className="w-[40%] border-[#F3C300] border h-full rounded-md hover:bg-blue-200 hover:border-none"
            >
              <button className="text-base hover:bg-blue-200 w-full h-full px-2 rounded-md ">
                Login
              </button>
            </Link>
          </div>
         }
        
          <div
            className=" md:hidden  w-[5rem] mx-2 flex flex-row items-center justify-between"
            
          > 
          {currentUser && <div className="relative flex items-center">
              <Link to={'checkout'}>
                 <FaCartShopping className="text-gray-700 text-2xl hover:text-blue-500 transition-colors" />
              </Link>
              
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
              {cartItems.length}
              </span>
            </div>}

            <img
              src={menuItem}
              alt="humbuger"
              className=" h-full object-contain w-[2rem]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
        
        {isMenuOpen && <MobileSidebar />}
      </div>
    </div>
  );
};

export default Header;
