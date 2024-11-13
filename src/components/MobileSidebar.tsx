import CloseMenu from "/closeMenu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileSidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handle_toggle_menu = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
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
          <Link to={"/"} className="bg-blue-300  py-3 px-5 rounded-md mb-3">
             Home
          </Link>
          <Link to={"/"} className="bg-blue-300 py-3 px-5 rounded-md mb-3">
             Home
          </Link>
          <Link to={"/"} className="bg-blue-300 py-3 px-5 rounded-md mb-3">
             Home
          </Link>
        </div>

        {/* for sign up and log out */}

        <div className="bg-white pb-40 border-t-2 border-black px-3">
            <button>Sign up</button>
            <button>Sign up</button>
        </div>
    </div>
  </div>
  )
}

export default MobileSidebar
