import React, { useState } from "react";
import { schema2 } from "../../external";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { collection, addDoc, } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigate } from "react-router";


const BusinessAccountForm = () => {
  const navigate=useNavigate()
  const [vendorsDetails, setVendorsDetails] = useState({
    businessName: "",
    businessRegNo: "",
    businessEmail: "",
    businessAddress: "",
    businessID: "",
    businessDoc: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema2) });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setVendorsDetails((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      await addDoc(collection(db, "users"), vendorsDetails);
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-full h-full md:w-[30rem] md:h-[45rem] md:rounded-3xl border border-[#B5B1B1] p-5 md:p-10">
        <div className="h-20 flex flex-col justify-between">
          <h2 className="text-[#0634D8] font-semibold leading-10 text-3xl text-center md:text-left font-wix">
            Create business account
          </h2>
          <p className="text-base font-normal leading-7 text-center md:text-left font-wix">
            Set an account up for free. and enjoy free delivery
          </p>
          {/* forms */}
          <div className=" md:w-full h-full mt-3 ml-3">
            <form
              className="md:border-b pb-4 border-[#BBBBBB]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full flex flex-col items-start mb-3">
                <label className="text-[#2E3A59] text-sm font-semibold mb-1 font-wix">
                  Business Name
                </label>
                <input
                  {...register("businessName")}
                  id="businessName"
                  type="text"
                  value={vendorsDetails.businessName}
                  placeholder="provide a unique business name"
                  className="w-full border border-gray-300 outline-none h-9 px-2 rounded  text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm"
                  onChange={(e) => handleInputChange(e)}
                />
                <p className="text-red-600 text-xs font-wix">
                  {errors.businessName?.message}
                </p>
              </div>

              <div className="w-full flex flex-col items-start mb-3">
                <label className="text-[#2E3A59] text-sm font-semibold mb-1 font-wix">
                  Business Registration Number
                </label>
                <input
                  {...register("businessRegNo")}
                  id="businessRegNo"
                  value={vendorsDetails.businessRegNo}
                  type="text"
                  placeholder="business registered number"
                  className="w-full border border-gray-300 outline-none h-9 px-2 rounded  text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm"
                  onChange={(e) => handleInputChange(e)}
                />
                <p className="text-red-600 text-xs font-wix">
                  {errors.businessRegNo?.message}
                </p>
              </div>
              <div className="w-full flex flex-col items-start mb-3">
                <label className="text-[#2E3A59] text-sm font-semibold mb-1 font-wix">
                  Business Email
                </label>
                <input
                  {...register("businessEmail")}
                  id="businessEmail"
                  value={vendorsDetails.businessEmail}
                  type="text"
                  placeholder="registered business name"
                  className="w-full border border-gray-300 outline-none h-9 px-2 rounded  text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm"
                  onChange={(e) => handleInputChange(e)}
                />
                <p className="text-red-600 text-xs font-wix">
                  {errors.businessEmail?.message}
                </p>
              </div>
              <div className="w-full flex flex-col items-start mb-3">
                <label className="text-[#2E3A59] text-sm font-semibold mb-1 font-wix">
                  Business Address
                </label>
                <input
                  {...register("businessAddress")}
                  value={vendorsDetails.businessAddress}
                  id="businessAddress"
                  type="text"
                  placeholder="business address"
                  className="w-full border border-gray-300 outline-none h-9 px-2 rounded text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm"
                  onChange={(e) => handleInputChange(e)}
                />
                <p className="text-red-600 text-xs font-wix">
                  {errors.businessAddress?.message}
                </p>
              </div>

              <div className="w-full flex flex-col items-start mb-6 font-wix">
                <label className="text-[#2E3A59] text-base  font-semibold mb-1">
                  Attach ID
                </label>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-3 mt-2">
                  <select
                    {...register("businessID")}
                    value={vendorsDetails.businessID}
                    id="businessID"
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
                  <p className="text-red-600 text-xs font-wix">
                    {errors.businessID?.message}
                  </p>

                  <input
                    {...register("businessDoc")}
                    value={vendorsDetails.businessDoc}
                    type="file"
                    id="businessDoc"
                    className="w-full md:w-[14rem] border border-gray-300 rounded-lg px-3 py-2 mt-2 md:mt-0 shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => handleInputChange(e)}
                  />
                  <p className="text-red-600 text-xs font-wix">
                    {errors.businessDoc?.message}
                  </p>
                </div>
              </div>
              <div className="w-full h-11 flex flex-col mt-14 md:mt-0 items-start mb-2 rounded-lg overflow-hidden">
                <button
                  type="submit"
                  className="w-full h-full bg-[#141B34] text-white"
                >
                  Create Account
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

export default BusinessAccountForm;
