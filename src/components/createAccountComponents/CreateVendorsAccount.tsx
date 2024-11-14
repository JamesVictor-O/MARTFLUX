import React, { useState } from "react";

interface BusinessValueProps{
  businessName?: string;
  businessRegNo?: string;
  businessEmail?: string;
  businessAddress?: string;
  businessID?: string;
  businessDoc?: string;
}
const CreateVendorsAccount = () => {
  const [vendorsDetails, setVendorsDetails] = useState({
    businessName: "",
    businessRegNo: "",
    businessEmail: "",
    businessAddress: "",
    businessID: "",
    businessDoc: "",
  });

  const [formError,setFormErrors]=useState<BusinessValueProps>({})

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setVendorsDetails((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmitForm=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      setFormErrors(validateForm(vendorsDetails))

  }

  const validateForm=(values:BusinessValueProps)=>{
     const regex=/^\S+@\S+\.\S+$/;
     let error: Partial<BusinessValueProps>={}
     if(!values.businessName){
        error.businessName="valid business name is required"
     }
     if(!values.businessEmail || !regex.test(values.businessEmail)){
       error.businessEmail="Valid business email is required"
     }
     if(!values.businessAddress){
      error.businessAddress="Valid business Address required"
     }
     if(!values.businessID){
      error.businessID="Valid business ID required"
     }
     if(!values.businessDoc){
      error.businessDoc="Valid document required"
     }
     if(!values.businessRegNo){
      error.businessRegNo="Valid business registration number is required"
     }
     return error;
  }

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
            <form className="md:border-b pb-4 border-[#BBBBBB]" onSubmit={handleSubmitForm}>
              <div className="w-full flex flex-col items-start mb-2">
                <label className="text-[#2E3A59] text-lg font-semibold mb-1 font-wix">
                  Business Name
                </label>
                <input
                  name="businessName"
                  type="text"
                  value={vendorsDetails.businessName}
                  placeholder="At least 10 characters"
                  className="w-full border border-gray-300 outline-none h-12 px-2 rounded-lg  text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm"
                  onChange={(e) => handleInputChange(e)}
                />
                <p className="text-red-600 text-xs font-wix">{formError.businessName}</p>
              </div>
              
              <div className="w-full flex flex-col items-start mb-2">
                <label className="text-[#2E3A59] text-lg font-semibold mb-1 font-wix">
                  Business Registration Number
                </label>
                <input
                  name="businessRegNo"
                  value={vendorsDetails.businessRegNo}
                  type="text"
                  placeholder="At least 10 characters"
                  className="w-full border border-gray-300 outline-none h-12 px-2 rounded-lg  text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm"
                  onChange={(e) => handleInputChange(e)}
                />
                 <p className="text-red-600 text-xs font-wix">{formError.businessRegNo}</p>
              </div>
              <div className="w-full flex flex-col items-start mb-2">
                <label className="text-[#2E3A59] text-lg font-semibold mb-1 font-wix">
                  Business Email
                </label>
                <input
                  name="businessEmail"
                  value={vendorsDetails.businessEmail}
                  type="text"
                  placeholder="At least 10 characters"
                  className="w-full border border-gray-300 outline-none h-12 px-2 rounded-lg  text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm"
                  onChange={(e) => handleInputChange(e)}
                />
                 <p className="text-red-600 text-xs font-wix">{formError.businessEmail}</p>
              </div>
              <div className="w-full flex flex-col items-start mb-2">
                <label className="text-[#2E3A59] text-lg font-semibold mb-1 font-wix">
                  Business Address
                </label>
                <input
                value={vendorsDetails.businessAddress}
                  name="businessAddress"
                  type="text"
                  placeholder="At least 10 characters"
                  className="w-full border border-gray-300 outline-none h-12 px-2 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm"
                  onChange={(e) => handleInputChange(e)}
                />
                 <p className="text-red-600 text-xs font-wix">{formError.businessAddress}</p>
              </div>

              <div className="w-full flex flex-col items-start mb-6 font-wix">
                <label className="text-[#2E3A59] text-lg font-semibold mb-1">
                  Attach ID
                </label>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-3 mt-2">
                  <select
                  value={vendorsDetails.businessID}
                    name="businessID"
                    className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 text-lg outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    onChange={(e) => handleInputChange(e)}
                    defaultValue="" // Reset to ensure "Select an ID" is selected initially
                  >
                    <option disabled value="">
                      Select an ID
                    </option>
                    <option>Driver's License</option>
                    <option>NIN</option>
                    <option>Voter's Card</option>
                  </select>

                  <input
                    value={vendorsDetails.businessDoc}
                    type="file"
                    name="businessDoc"
                    className="w-full md:w-[14rem] border border-gray-300 rounded-lg px-3 py-2 mt-2 md:mt-0 shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => handleInputChange(e)}
                  />
                   {/* <p className="text-red-600 text-xs font-wix">{formError.businessDoc}</p> */}
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
