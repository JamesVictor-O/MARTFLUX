import "./App.css";
import Root from "./Root";
import HeroPage from "./page/heroPage/HeroPage";
import CreateAccount from "./page/createAccountPage/CreateAccount";
import CreateAccountLandingPage from "./page/createAccountPage/CreateAccountLandingPage";
import SignUpPage from "./page/signUpPage/signUpPage";
import { useDispatch } from "react-redux";
import MarketPlace from "./page/marketPlace/MarketPlace";
import CheckoutPage from "./page/checkoutPage/CheckoutPage";
import PaymentGateWay from "./components/paymentPage/PaymentGateWay";
import VendorDashBoard from "./components/vendorDashBoard/vendorDashBoard";
import LoginPage from "./page/loginPage/LoginPage";
import { set_user } from "./context/redux/counter/userSlice";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./page/aboutUs/AboutUs";
import { useEffect } from "react";
import { auth } from "../firebase";

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(async(userAuth)=>{
     if(userAuth){
       dispatch(set_user(userAuth))
     }else{
        dispatch(set_user(null))
        console.log(userAuth)
     }
    })

    return () => {
      unsubscribe()
    } 
  },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HeroPage />} />
        <Route path="createAccount" element={<CreateAccount />}>
          <Route index element={<CreateAccountLandingPage />} />
          <Route
            path="signup"
            element={<SignUpPage/>}
          />
        </Route>
        <Route path="aboutUs" element={<AboutUs/>}/>
        <Route path="marketplace" element={<MarketPlace/>} />
        <Route path="vendorDashboard" element={<VendorDashBoard/>} />
        <Route path="checkout" element={<CheckoutPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Route>
    )
  );

  
  return (
        <RouterProvider router={router} />
  );
}

export default App;
