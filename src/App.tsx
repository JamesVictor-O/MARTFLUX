import "./App.css";
import Root from "./Root";
import HeroPage from "./page/heroPage/HeroPage";
import CreateAccount from "./page/createAccountPage/CreateAccount";
import CreateAccountLandingPage from "./page/createAccountPage/CreateAccountLandingPage";
import CreateVendorAccountPage from "./page/createVendorsAccount/createVendorsAccountPage";
// import CreateShopperAcccount from "./page/createShopperAccount.tsx/CreateShopperAcccount";
import { Provider } from "react-redux";
import { store } from "./context/redux/configureStore";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./page/aboutUs/AboutUs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HeroPage />} />
        <Route path="createAccount" element={<CreateAccount />}>
          <Route index element={<CreateAccountLandingPage />} />
          <Route
            path="createVendorAccount"
            element={<CreateVendorAccountPage />}
          />
          {/* <Route
            path="createShopperAccount"
            element={<CreateShopperAcccount />}
          /> */}
        </Route>
        <Route path="aboutUs" element={<AboutUs/>}/>
      </Route>
    )
  );

  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
