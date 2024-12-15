import advertImage from "/assets/hand holding shopping bag.png";
import cryptoImage from "/public/crypto-converter.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen md:h-screen bg-[#1A2859] flex md:items-center align-middle flex-col px-3 pt-12  md:px-4 pb-6">
      <div className="md:w-[70%] md:h-48 flex flex-col md:justify-center md:align-middle md:items-center ">
        <h2 className="text-4xl md:text-5xl text-white font-medium font-wix text-center">
          Sell and shop in the world largest marketplace.
        </h2>
        <p className=" text-white md:w-[60%] text-center mt-6 md:mt-10 font-wix">
          Browse your favorite products, enjoy hassle-free checkout, and
          experience the future of online shopping—fast, secure, and
          effortless."
        </p>
      </div>

      <div className=" flex flex-col-reverse md:flex-row items-center w-[90%]  overflow-visible md:mt-14">
      <div className="hidden md:block  w-[3rem] md:w-[16rem] lg:ml-44">
        <img src={advertImage} alt="" />
      </div>
      {/* sign up buttons */}
        <div className=" text-white rounded-md overflow-hidden w-full md:w-[25rem]  flex flex-row items-center justify-between  ml-10">
          
          <Link to={"/marketplace"} className="w-full h-full py-4 px-4 border-b-2 rounded-2xl text-center justify-between border">
             Shop now
          </Link>
          <Link to={"/createAccount"} className="w-full h-full py-4 px-4 border-b-2 rounded-2xl text-center justify-between border ml-3">
             Become a Vendor
          </Link>
          
        </div>

        {/* crypto image */}
        <div className=" md:absolute md:h-[24rem] md:w-[20rem] lg:w-[25rem] right-0 md:top-14 ml-20 top-0 md:ml-0">
        <img src={cryptoImage} alt="" className="w-full h-full object-contain"/>
      </div>
      </div>

      {/* bag icon */}
    
    </div>
  );
};

export default LandingPage;
