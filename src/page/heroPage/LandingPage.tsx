// import bgImage from "/public/assets/bags-with-gifts-top-copy-space.jpg"
// import advertImage from "/public/assets/hand holding shopping bag.png"
import BillBoard from "../../components/heroPage/BillBoard";

const LandingPage = () => {
  return (
    <div className="w-full md:h-full bg-[#F1EDE7] flex items-center align-middle pt-2 md:pt-6 flex-col px-4 md:px-4">
       <div className="w-full md:w-[70%] h-48 flex flex-col justify-center align-middle items-center">
            <h2 className="text-2xl md:text-5xl text-[#05144A] font-medium text-center">
              Shop with convenience,that lets you complete your purchase in
              seconds
            </h2>
            <p className="md:w-[60%] text-center  text-[#3A4778] md:mt-10 ">
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
