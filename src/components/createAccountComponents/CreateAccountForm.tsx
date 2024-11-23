import React, { useState } from "react";
interface ShopperDetailsProps{
  shopperName:string,
  shopperEmail:string,
  shopperPassword:string,
  shopperConfirmPassword:string
}



const CreateAccountForm = () => {
  let initialState={
    shopperName:"",
    shopperEmail:"",
    shopperPassword:"",
    shopperConfirmPassword:""
  }
  const [shopperDetails,setShopperDetails]=useState<ShopperDetailsProps>(initialState)
  const [errorMessages,setErrorMessages]=useState<ShopperDetailsProps | {}>({})

  const handle_change=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setShopperDetails(prev=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  const handle_submit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setErrorMessages(validate(shopperDetails))
  }

  const validate=(details:ShopperDetailsProps)=>{
    const regex=/^\S+@\S+\.\S+$/;
        let errorMessages: Partial<ShopperDetailsProps>={}
        if(details.shopperName== "" || details.shopperName.trim().length !==6){
          errorMessages.shopperName="invalid name, fullName required"
        }
        if(details.shopperEmail=="" ||!regex.test(details.shopperEmail)){
             errorMessages.shopperEmail="invalid email account, please provide a valid email"
        }
        if(details.shopperPassword==""){
          errorMessages.shopperEmail="please provide a strong password"
        }
        if(details.shopperConfirmPassword=="" || details.shopperConfirmPassword !== details.shopperPassword){
          errorMessages.shopperEmail="please confirm password"
        }

        return errorMessages;
  }

  // useEffect(()=>{console.log(shopperDetails)},[shopperDetails])
  return (
    <div className="w-full md:w-[30rem] h-[40rem] rounded-3xl md:border border-[#B5B1B1] p-5 md:p-10">
      <div className="h-20 flex flex-col justify-between">
        <h2 className="text-[#0634D8] font-semibold leading-10 text-3xl text-center md:text-left">
          Create an account
        </h2>
        <p className="text-base font-normal leading-7 text-center md:text-left">
          Set an account up for free. and enjoy free delivery
        </p>
        {/* forms */}
        <div className="w-full h-full mt-3">
          <form className="md:border-b pb-4 border-[#BBBBBB]" onSubmit={handle_submit}>
            <div className="w-full h-20 flex flex-col items-start mb-2">
              <label className="text-[#172248] text-base font-normal leading-6">
                Your Name
              </label>
              <input
              onChange={handle_change}
              value={shopperDetails.shopperName}
                name="shopperName"
                type="text"
                placeholder="input your name"
                className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
              />
              <p className="text-red-600 text-xs font-wix">{"shopperName" in errorMessages ? errorMessages.shopperName : ""}</p>
            </div>
            <div className="w-full h-20 flex flex-col items-start mb-2">
              <label className="text-[#172248] text-base font-normal leading-6">
                Your Email
              </label>
              <input
              onChange={handle_change}
              value={shopperDetails.shopperEmail}
                name="shopperEmail"
                type="text"
                placeholder="enter your email"
                className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
              />
            </div>
            <div className="w-full h-20 flex flex-col items-start mb-2">
              <label className="text-[#172248] text-base font-normal leading-6">
                Password
              </label>
              <input
              onChange={handle_change}
              value={shopperDetails.shopperPassword}
                name="shopperPassword"
                type="text"
                placeholder="At least 10 characters"
                className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
              />
            </div>
            <div className="w-full h-20 flex flex-col items-start mb-2">
              <label className="text-[#172248] text-lg font-normal leading-6">
                Re-enter Password
              </label>
              <input
              onChange={handle_change}
              name="shopperConfirmPassword"
               value={shopperDetails.shopperConfirmPassword}
                type="text"
                placeholder="At least 10 characters"
                className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
              />
            </div>
            <div className="w-full h-11 flex flex-col items-start mb-2 rounded-lg overflow-hidden">
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
  );
};

export default CreateAccountForm;
