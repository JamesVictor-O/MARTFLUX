import BusinessMan from "/public/Businessman.png";

const Trending = () => {
  return (
    <div className="w-full px-3  mb-9">
      <div className=" w-full px-10 h-[8rem] flex items-center align-middle justify-center  ">
        <h2 className="md:text-3xl  font-semibold  mb-2  font-wix w-[26rem] mr-4">
          Buy and list your products as a vendor on marketplace
        </h2>
        <span className="mx-4 h-[6rem] border-r border-black"></span>
        <p className="text-base font-normal text-gray-500 font-wix text-left w-[20rem] ml-6">
          With ease find the latest procuts missing in your homes, office and
          workshops.{" "}
        </p>
      </div>
      <div className="w-full md:h-[30rem] relative  bg-[#FFF5CB]">
        {/* <Image src={"/trending2.jpg"} alt=""/> */}

        <div className="md:absolute bg-white md:w-[40rem] py-5 px-10 rounded-md text-white border border-gray-300 md:text-black md:ml-[20rem] mt-[2rem]">
          <h2 className="text-2xl text-blue-500">Select category</h2>
          <p className="font-wix my-6 text-black">
            We'll use your industry to suggest a campaign goal that's relevant
            to your business. You can update this information in Ad account
            settings at any time.
          </p>
          <select name="" id="" className="w-full outline-none h-[2.4rem] rounded-lg px-3">
            <option disabled>select categorie</option>
            <option value="">Fashion</option>
            <option value="">Computers</option>
            <option value="">Laptops</option>
          </select>
          <div className="w-full flex flex-row justify-end mt-9" >
            <button className="font-wix bg-blue-100 px-5 py-2 rounded">Back</button>
            <button className="font-wix bg-[#8A8FA1] px-5 py-2 rounded ml-4">next</button>
          </div>
        </div>

        <img
          src={BusinessMan}
          alt=""
          className="hidden md:flex w-[28rem]  rounded-md absolute right-0 bottom-0"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Trending;
