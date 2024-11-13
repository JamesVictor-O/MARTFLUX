import shopIcon from "/shop.svg";
import populationIcon from "/population.svg";
const AccountType = () => {
  return (
    <div className="w-[30rem] h-[39rem] md:rounded-3xl md:border border-[#B5B1B1] p-5 md:p-10">
      {/* header */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-[#0634D8] font-normal text-2xl leading-10">
          Join as a Vendor or Buyer
        </h1>
        <p className="text-sm font-normal text-center md:text-left">
          Join millions of users buying and enjoying the marketplace
        </p>
      </div>

      {/* main body */}
      <div className="w-full h-[70%] flex flex-col mt-10">
        {/* vendor section */}
        <div className="flex items-center border border-gray-300 h-24 rounded justify-between p-4 mb-4">
          <div className="ml-3 h-16 flex flex-col justify-between">
            <div className="w-6 h-6">
              <img src={shopIcon} alt="" />
            </div>
            <p className="text-sm font-medium">
              I am shopper, looking for product to shop
            </p>
          </div>

          <input
            type="radio"
            name="userType"
            className="form-radio text-blue-600 w-4 h-4"
          />
        </div>

        {/* vendor active users */}
        <div className="flex flex-row items-center border-2 border-gray-300 md:w-[60%]  rounded-md h-12 my-4 px-3 justify-center md:justify-between">
          <img src={populationIcon} alt="" className="w-5 h-5" />
          <p className="text-gray-400 text-sm">13,939,390 active shoppers</p>
        </div>

        {/* shopper section */}
        <div className="flex items-center border border-gray-300 h-24 rounded justify-between p-4">
          <div className="ml-3 h-16 flex flex-col justify-between">
            <div className="w-6 h-6">
              <img src={shopIcon} alt="" />
            </div>
            <p className="text-sm font-medium">
              I am Vendor, looking to display my product
            </p>
          </div>

          <input
            type="radio"
            name="userType"
            className="form-radio text-blue-600 w-4 h-4"
          />
        </div>

        {/* shopper active users */}
        <div className="flex flex-row items-center border-2 border-gray-300 md:w-[60%] rounded-md h-12 my-4 px-3 justify-center md:justify-between">
          <img src={populationIcon} alt="" className="w-5 h-5" />
          <p className="text-gray-400 text-sm">13,939,390 active Vendors</p>
        </div>
      </div>

      {/* button section - move this outside of main body */}
      <div className="w-full flex justify-center ">
        <button className="px-6 py-2 bg-[#141B34] text-white rounded-lg w-full">
          Create account
        </button>
      </div>

      <p className="text-sm font-medium leading-5 mt-3">
        Already have an account? <span className="text-blue-600">Sign In</span>
      </p>
    </div>
  );
};

export default AccountType;
