// import bgImage from "/public/assets/bags-with-gifts-top-copy-space.jpg"
import advertImage from "/assets/hand holding shopping bag.png";
// import BillBoard from "../../components/heroPage/BillBoard";
import cryptoImage from "/public/crypto-converter.png"

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
      {/* shop button */}

      {/* billbord */}
      {/* <div className="mt-16 mb-8">
           <BillBoard/>
        </div> */}

      <div className=" flex flex-col-reverse md:flex-row items-center w-[90%]  overflow-visible md:mt-14">
        {/* hand bag image */}
      <div className="hidden md:block  w-[3rem] md:w-[16rem] lg:ml-44">
        <img src={advertImage} alt="" />
      </div>
      {/* sign up buttons */}
        <div className=" text-white rounded-md overflow-hidden w-full md:w-[25rem]  flex flex-row items-center justify-between  ml-10">
          
          <button className="w-full h-full py-4 px-4 border-b-2 rounded-2xl justify-between border">Shop now</button>
          <button className="w-[20rem] h-full py-4 px-4 text-white bg-[#F3C300] border-b-2 rounded-2xl justify-between border ml-4">Become a Vendor</button>
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
