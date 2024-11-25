import CloseMenu from "/closeMenu.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle_isMenuOpen } from "../context/redux/counter/counterSlice";
import React from "react";

const MobileSidebar = () => {
  const navigate = useNavigate();
  const handle_onClick = (e:React.MouseEvent<HTMLAnchorElement| HTMLButtonElement>) => {
    let clickedOn=e.target as HTMLAnchorElement;
    
   if(clickedOn.id =="home"){
    navigate("/")
   }else if(clickedOn.id =="about"){
    navigate("about")
   }else if(clickedOn.id =="signUp"){
    navigate("/createAccount");
   }
    dispatch(toggle_isMenuOpen());
  }
  let dispatch = useDispatch();
  return (
    <div className="absolute  inset-y-1/4 bg-white h-screen w-[70%] top-0 right-0 z-20 p-4">
      <img
        onClick={() => dispatch(toggle_isMenuOpen())}
        src={CloseMenu}
        alt=""
        className="w-[2rem]"
      />
      <div className=" w-full h-full mt-4 flex flex-col  justify-between">
        {/* for menus */}
        <div className="pt-10 flex flex-col z-40">
         <Link
             id="home"
              to={"/"}
              className="border-b-2 py-2 px-3 rounded mb-3"
              onClick={(e) => handle_onClick(e)}
            >
              Home
            </Link>
          <Link
            id="whyUs"
            to={"/"}
            className="border-b-2 py-2  px-3 rounded mb-3"
            onClick={() => dispatch(toggle_isMenuOpen())}
          >
            Why us
          </Link>
          <Link 
          id="about"
          to={"aboutUs"} 
          className="border-b-2 py-2  px-3 rounded mb-3"
          onClick={(e)=>handle_onClick(e)}
          >

            About us
          </Link>
        </div>

        {/* for sign up and log out */}

        <div className="bg-white pb-36 border-t-2 border-gray-400 px-3 flex flex-col items-center">
          <button
            id="signUp"
            className="w-full bg-blue-300 mt-5 text-white py-2 rounded-md "
            onClick={(e) => handle_onClick(e)}
          >
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
