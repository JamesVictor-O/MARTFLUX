import "./App.css";
import Root from "./Root";
import HeroPage from "./page/heroPage/HeroPage";
import CreateAccount from "./page/createAccountPage/CreateAccount";
import CreateAccountLandingPage from "./page/createAccountPage/CreateAccountLandingPage";
import SignUpPage from "./page/signUpPage/signUpPage";
import { Provider } from "react-redux";
import { store } from "./context/redux/configureStore";
import MarketPlace from "./page/marketPlace/MarketPlace";

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
            path="signup"
            element={<SignUpPage/>}
          />
        </Route>
        <Route path="aboutUs" element={<AboutUs/>}/>
        <Route path="marketplace" element={<MarketPlace/>} />
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
