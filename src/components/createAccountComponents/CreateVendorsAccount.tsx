const CreateVendorsAccount = () => {
  return (
    <div>
      <div className="w-full md:w-[30rem] h-[50rem] md:rounded-3xl md:border border-[#B5B1B1] p-5 md:p-10">
        <div className="h-20 flex flex-col justify-between">
          <h2 className="text-[#0634D8] font-semibold leading-10 text-3xl text-center md:text-left font-wix">
            Create an account
          </h2>
          <p className="text-base font-normal leading-7 text-center md:text-left font-wix">
            Set an account up for free. and enjoy free delivery
          </p>
          {/* forms */}
          <div className="w-[90%] md:w-full h-full mt-3 ml-3">
            <form className="md:border-b pb-4 border-[#BBBBBB]">
              <div className="w-full h-20 flex flex-col items-start mb-2">
                <label className="text-[#172248] text-base font-normal leading-6">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="John wilson"
                  className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
                />
              </div>
              <div className="w-full h-20 flex flex-col items-start mb-2">
                <label className="text-[#172248] text-base font-normal leading-6">
                  Business registration number
                </label>
                <input
                  type="text"
                  placeholder="+234081956735"
                  className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
                />
              </div>
              <div className="w-full h-20 flex flex-col items-start mb-2">
                <label className="text-[#172248] text-base font-normal leading-6">
                  Business email
                </label>
                <input
                  type="text"
                  placeholder="jamesvictor@gmail.com"
                  className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
                />
              </div>
              <div className="w-full h-20 flex flex-col items-start mb-2">
                <label className="text-[#172248] text-lg font-normal leading-6">
                  Business Address
                </label>
                <input
                  type="text"
                  placeholder="At least 10 characters"
                  className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
                />
              </div>

              <div className="w-full h-20 flex flex-col items-start mb-4">
                <label className="text-[#172248] text-lg font-normal leading-6">
                  Attach ID
                </label>
                <div className="flex flex-col md:flex-row md:items-center md:mx-3 mt-4 md:mt-0">
                  <select className="bg-transparent text-lg outline-none mb-2 md:mb-0">
                    <option disabled selected className=" text-gray-400">Select an ID</option>
                    <option>Drivers license</option>
                    <option>NIN</option>
                    <option>Voters Card</option>
                  </select>
                  <input
                    type="file"
                    placeholder="At least 10 characters"
                    className="w-[14rem] border border-[#ADADAD] outline-none  rounded-md p-2 shadow md:ml-2"
                  />
                </div>
              </div>
              <div className="w-full h-11 flex flex-col mt-14 md:mt-0 items-start mb-2 rounded-lg overflow-hidden">
                <button className="w-full h-full bg-[#141B34] text-white">
                  continue
                </button>
              </div>
              <div className="w-80  h-10 mt-1 ">
                <p className="text-sm text-[#2C3249] leading-5 font-normal">
                  By creating an account, you agree to Martflux’s account{" "}
                  <a className="text-blue-400">condition of Use</a> and{" "}
                  <a className="text-blue-500">privacy notice</a>{" "}
                </p>
              </div>
            </form>
            <p className="text-sm font-medium leading-5 mt-2">
              Already have an account?{" "}
              <span className="text-blue-600">Sign In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVendorsAccount;
