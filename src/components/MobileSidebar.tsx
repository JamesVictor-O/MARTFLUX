import CloseMenu from "/closeMenu.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useContext } from "react";
import { UserContext } from "../context/contextApi/UserContext";
import { useSelector } from "react-redux";
import { RootState } from "@/context/redux/configureStore";
import React from "react";

const MobileSidebar = () => {
  let {currentUser}=useSelector((state:RootState)=>state.user)
  const navigate = useNavigate();
  const {setIsMenuOpen,isMenuOpen}=useContext(UserContext)!
  const userStatus=localStorage.getItem("status")

  const handle_onClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    let clickedOn = e.target as HTMLAnchorElement;

    if (clickedOn.id == "home") {
      navigate("/");
    } else if (clickedOn.id == "about") {
      navigate("about");
    } else if (clickedOn.id == "signUp") {
      navigate("/createAccount");
    }
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <div className="absolute  inset-y-1/4 bg-white h-screen w-[70%] top-0 right-0 z-20 p-4">
      <img
        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            id="shop"
            to={"marketplace"}
            className="border-b-2 py-2  px-3 rounded mb-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Shop
          </Link>
          <Link
            id="about"
            to={"aboutUs"}
            className="border-b-2 py-2  px-3 rounded mb-3"
            onClick={(e) => handle_onClick(e)}
          >
            About us
          </Link>
          {
            userStatus === "vendor" ?
                 <Link to={"dashboardLayout"}>
                 <li className="h-full text-blue  p-2 mr-2 rounded-md text-lg">
                   Dashboard
                 </li>
               </Link>: null
            }
        </div>

        {/* for sign up and log out */}

        {currentUser ? 
          <div className="bg-white pb-36 border-t-2 border-gray-400 px-3 flex flex-col items-center">
            <button
              id="signUp"
              className="w-full bg-blue-300 mt-5 text-white py-2 rounded-md "
              onClick={() => {
                auth.signOut()
                localStorage.removeItem("status")
                setIsMenuOpen(!isMenuOpen)
              }}
            >
              Sign out
            </button>
          </div>
         : 
          <div className="bg-white pb-36 border-t-2 border-gray-400 px-3 flex flex-col items-center">
            <button
              id="signUp"
              className="w-full bg-blue-300 mt-5 text-white py-2 rounded-md "
              onClick={(e) => handle_onClick(e)}
            >
              Sign up
            </button>
            <Link
              to={"login"}
              className="mt-3 border border-blue-300 w-full py-2 rounded-md text-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              
            >
              Log in
            </Link>
          </div>
        }
      </div>
    </div>
  );
};

export default MobileSidebar;
