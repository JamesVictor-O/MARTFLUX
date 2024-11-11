// import bgImage from "/public/assets/bags-with-gifts-top-copy-space.jpg"
import advertImage from "/public/assets/hand holding shopping bag.png"

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen bg-custom-bg bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* body container */}
      <div className="relative z-10 flex justify-center align-middle w-full items-center pt-10">
        {/* header text */}
        <div className=" relative flex justify-center">
          <div className="w-[70%] h-48 flex flex-col justify-center align-middle items-center z-20">
            <h2 className="text-5xl text-white font-medium text-center">
              Shop with convenience,that lets you complete your purchase in
              seconds
            </h2>
            <p className="w-[60%] text-center  text-white mt-10">
              Browse your favorite products, enjoy hassle-free checkout, and
              experience the future of online shopping—fast, secure, and
              effortless."
            </p>
          </div>

          {/* image  */}
          <div className="bg-white rounded-full text-center h-40 p-2 z-20">
            <img src={advertImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
