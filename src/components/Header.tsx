import appLogo from "/public/assets/menu-02.svg";
import searchIcon from "/public/assets/searchIcon.svg";
import solarBag from "/public/assets/solar_bag.svg";
import LogImage from "/logoImage.png";
import menuItem from "/menu2.svg";
import CloseMenu from "/closeMenu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handle_toggle_menu = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="fixed z-20 w-full h-16 bg-[#141B34] flex flex-row items-center align-middle p-2 md:p-5 md:px-10 justify-between">
      {/* -------------- Logo ---------------- */}
      <div className="w-40 h-9 flex flex-row items-center justify-between">
        <img src={LogImage} className="h-8 me-3" alt="FlowBite Logo" />
        <h2 className="w-32 h-full text-2xl font-normal text-blue-500">
          MART<span className="text-yellow-400">FLUX</span>
        </h2>
        <img src={appLogo} alt="icon" className="hidden md:block ml-5" />
      </div>

      {/* --------------search bar---------------------- */}
      <div className="w-96 h-10  hidden md:flex flex-row items-center rounded-lg overflow-hidden bg-yellow-500">
        <select className="h-full w-24 outline-none px-2">
          <option value="men">Men</option>
        </select>
        <input type="text" className="h-full outline-none p-2" />
        <div className="bg-yellow-300 text-black h-full p-2">
          <img src={searchIcon} alt="" className="h-full w-7" />
        </div>
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

        <div className="hidden md:block w-24 h-9 rounded-md text-black bg-white">
          <Link to={"createAccount"}>
            <button className="w-full h-full">Shop Now</button>
          </Link>
        </div>

        <div className=" md:hidden  w-[2rem] mx-2" onClick={handle_toggle_menu}>
          <img
            src={menuItem}
            alt="humbuger"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {isSidebarOpen && (
       <div className="fixed inset-0 bg-white opacity h-screen  w-[14rem] ml-40 p-4">
          <img
            onClick={handle_toggle_menu}
            src={CloseMenu}
            alt=""
            className="w-[2rem]"
          />
          <div className=" w-full h-full mt-4 flex flex-col justify-between">
              {/* for menus */}
              <div className="pt-10 flex flex-col  justify-center items-center align-middle">
                <Link to={"/createAccount"} className="bg-blue-300  py-3 px-5 rounded-md mb-3">
                   Home
                </Link>
                <Link to={"/"} className="bg-blue-300 py-3 px-5 rounded-md mb-3">
                   Shop Now
                </Link>
                <Link to={"/"} className="bg-blue-300 py-3 px-5 rounded-md mb-3">
                   Contact Us
                </Link>
              </div>

              {/* for sign up and log out */}

              <div className="bg-white pb-36 border-t-2 border-gray-400 px-3 flex flex-col items-center">
                  <button className="w-full bg-blue-300 mt-5 text-white py-2 rounded-md">Sign up</button>
                  <button className="mt-3 border border-blue-300 w-full py-2 rounded-md">Sign up</button>
              </div>
          </div>
        </div>
      )} 
    </div>
  );
};

export default Header;
