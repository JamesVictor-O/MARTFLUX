import  React, {  useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../../../firebase";
import { useNavigate } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import { useDispatch} from "react-redux";
import { set_user } from "../../context/redux/counter/userSlice";

const LoginPage = () => {
  let dispatch=useDispatch()
  
  const navigate = useNavigate()
  let initialState={
    shopperEmail: "",
    shopperPassword:""
  }
  const [loginDetails, setLoginDetails] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleOnchange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]:value
    })
    
  }

  // handling login with firebase
  const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
    let userInfo= await signInWithEmailAndPassword(auth, loginDetails.shopperEmail, loginDetails.shopperPassword)
      
      dispatch(set_user(userInfo.user))
      setIsLoading(false)
      setLoginDetails(initialState)
      setIsLoading(prev=> !prev)
      navigate('/marketplace')

    } catch (err) {
      setIsLoading(false)
      alert(err)
    }
  }

  return (
    <div className="h-screen md:h-96 flex flex-col pt-12 md:mt-0 md:justify-center w-full align-middle items-center ">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-[25px] underline font-serif font-medium">Login</h2>
        <p className="font-thin">Login with your email and password</p>
      </div>
      <form className="flex flex-col w-[70%]  md:w-[20%]" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="flex flex-col items-start mb-5">
          <label className=" text-red-900 text-left md:text-right text-[14px] md:text-[15px]">
            Email{" "}
          </label>
          <input
            name="shopperEmail"
            onChange={handleOnchange}
            value={loginDetails.shopperEmail}
            type="email"
            placeholder="input your email address"
            className="p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
        </div>

        {/* password */}
        <div className="flex flex-col items-start ">
          <label className="  text-red-900 text-left md:text-right text-[14px] md:text-[15px] ">
            Password
          </label>
          <input
            onChange={handleOnchange}
            value={loginDetails.shopperPassword}
            name="shopperPassword"
            type="password"
            placeholder="input your Password"
            className="p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
        </div>

        <button
          type="submit"
          className="mt-7 bg-red-300 text-white p-2 rounded"
        >
         {isLoading ?  <ClipLoader color="white"/> : " Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
