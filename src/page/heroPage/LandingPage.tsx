// import bgImage from "/public/assets/bags-with-gifts-top-copy-space.jpg"
// import advertImage from "/public/assets/hand holding shopping bag.png"
import BillBoard from "../../components/heroPage/BillBoard";

const LandingPage = () => {
  return ( 
    <div className="w-full h-screen md:h-full bg-[#F1EDE7] flex md:items-center align-middle pt-2 md:pt-6 flex-col px-3  md:px-4">
       <div className="md:w-[70%] md:h-48 flex flex-col md:justify-center md:align-middle md:items-center  mt-10">
            <h2 className="text-4xl md:text-5xl text-[#05144A] font-medium font-wix text-left md:text-center">
              Shop with convenience,that lets you complete your purchase in
              seconds
            </h2>
            <p className=" md:w-[60%] text-left md:text-center  text-[#3A4778] mt-6 md:mt-10 font-wix">
              Browse your favorite products, enjoy hassle-free checkout, and
              experience the future of online shopping—fast, secure, and
              effortless."
            </p>
        </div>
        {/* shop button */}
        <div className="mt-10 bg-[#141B34] text-white rounded-md overflow-hidden w-52">
           <button className="w-full h-full py-4 px-4">Shop now</button>
        </div>
        {/* billbord */}
        <div className="mt-16 mb-8">
           <BillBoard/>
        </div>
    </div>
  );
};

export default LandingPage;
