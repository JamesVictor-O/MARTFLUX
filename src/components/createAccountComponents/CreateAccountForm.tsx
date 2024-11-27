import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {auth,db} from "../../../firebase"
import { schema } from "../../external";
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc,collection, addDoc } from 'firebase/firestore';

interface ShopperDetailsProps {
  shopperName: string;
  shopperEmail: string;
  shopperPassword: string;
  shopperConfirmPassword: string;
}

interface handlePageProps{
  handlePage_progresion:()=> void
}

const CreateAccountForm = ({handlePage_progresion}:handlePageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    resolver: yupResolver(schema),
  });

  let initialState = {
    shopperName: "",
    shopperEmail: "",
    shopperPassword: "",
    shopperConfirmPassword: "",
  };
  const [shopperDetails, setShopperDetails] = useState<ShopperDetailsProps>(initialState);
 

  const handle_change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShopperDetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async(_e:any) => {
    try{
      await createUserWithEmailAndPassword(auth,shopperDetails.shopperEmail,shopperDetails.shopperPassword);
      handlePage_progresion()
      // const user=userCredentials.user
      // storing data in firebase
      // await setDoc(doc(db, "users", user.uid), {
      //   email: user.email,
      //   displayName: shopperDetails.shopperName,
      // })  
     
    }catch(error){
       console.log("external error"+ error)
    }
    // handlePage_progresion()
  };

  
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
          <form
            className="md:border-b pb-4 border-[#BBBBBB]"
            onSubmit={handleSubmit(onSubmit)}
          >


            <div className="w-full h-20 flex flex-col items-start mb-2">
              <label className="text-[#172248] text-base font-normal leading-6">
                Your Name
              </label>
              <input
                {...register("shopperName", { required: "user name required" })}
                onChange={handle_change}
                value={shopperDetails.shopperName}
                id="shopperName"
                type="text"
                placeholder="input your name"
                className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
              />
              <p className="text-red-600 text-xs font-wix">
                {errors.shopperName?.message}
              </p>
            </div>

            <div className="w-full h-20 flex flex-col items-start mb-2">
              <label className="text-[#172248] text-base font-normal leading-6">
                Your Email
              </label>
              <input
                {...register("shopperEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                onChange={handle_change}
                value={shopperDetails.shopperEmail}
                id="shopperEmail"
                type="text"
                placeholder="enter your email"
                className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
              />
               <p className="text-red-600 text-xs font-wix">
                {errors.shopperEmail?.message}
              </p>
            </div>

            <div className="w-full h-20 flex flex-col items-start mb-2">
              <label className="text-[#172248] text-base font-normal leading-6">
                Password
              </label>
              <input
                {...register("shopperPassword", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must be greater than 6",
                  },
                })}
                onChange={handle_change}
                value={shopperDetails.shopperPassword}
                id="shopperPassword"
                type="text"
                placeholder="At least 10 characters"
                className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
              />
               <p className="text-red-600 text-xs font-wix">
                {errors.shopperPassword?.message}
              </p>
            </div>


            <div className="w-full h-24 flex flex-col items-start mb-2">
              <label className="text-[#172248] text-lg font-normal leading-6">
                Re-enter Password
              </label>
              <input
                {...register("shopperConfirmPassword", {
                  required: "please confirm  your password",
                  validate: value => value === watch('shopperPassword') || 'Passwords do not match'
                })}
                onChange={handle_change}
                id="shopperConfirmPassword"
                value={shopperDetails.shopperConfirmPassword}
                type="text"
                placeholder="At least 10 characters"
                className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"
              />
               <p className="text-red-600 text-xs font-wix">
                {errors.shopperConfirmPassword?.message}
              </p>
            </div>


            <div className="w-full h-11 flex flex-col items-start mt-4 mb-2 rounded-lg overflow-hidden">
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
