import CloseMenu from "/closeMenu.svg";
import { Link } from "react-router-dom";
import {useDispatch } from "react-redux";
import { toggle_isMenuOpen } from "../context/redux/counter/counterSlice";

const MobileSidebar = () => {
  let dispatch=useDispatch();
  return (
    <div className="absolute  inset-y-1/4 bg-white h-screen w-[70%] top-0 right-0 z-20 p-4">
      <img
        onClick={()=> dispatch(toggle_isMenuOpen())}
        src={CloseMenu}
        alt=""
        className="w-[2rem]"
      />
      <div className=" w-full h-full mt-4 flex flex-col  justify-between">
        {/* for menus */}
        <div className="pt-10 flex flex-col z-40 justify-center items-center align-middle">
          <Link
            to={"/createAccount"}
            className="bg-blue-300  py-3 px-5 rounded-md mb-3"
            onClick={()=>dispatch(toggle_isMenuOpen())}
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="bg-blue-300 py-3 px-5 rounded-md mb-3 "
            onClick={()=>dispatch(toggle_isMenuOpen())}
          >
            Home
          </Link>
          <Link to={"/"} className="bg-blue-300 py-3 px-5 rounded-md mb-3">
            Home
          </Link>
        </div>

        {/* for sign up and log out */}

        <div className="bg-white pb-36 border-t-2 border-gray-400 px-3 flex flex-col items-center">
          <button className="w-full bg-blue-300 mt-5 text-white py-2 rounded-md">
            Sign up
          </button>
          <button className="mt-3 border border-blue-300 w-full py-2 rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
