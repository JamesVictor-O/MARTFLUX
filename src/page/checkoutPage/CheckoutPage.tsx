import Items from "./Items/Items";
import { GrLocation } from "react-icons/gr";
import { FaPlus, FaCreditCard } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import PaymentGateWay from "../../components/paymentPage/PaymentGateWay";
import { UserContext } from "../../context/contextApi/UserContext";
import { useState,useContext } from "react";

// import PaymentGateWay from '../paymentPage/PaymentGateWay'

const CheckoutPage = () => {
  const[Is_Checkout,setIs_Checkout]=useState(false)
  const {cartItems}=useContext(UserContext)!
  // const cartItems = [
  //   {
  //     id: 1,
  //     name: "Brown Brim",
  //     imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
  //     price: 25,
  //   },
  //   {
  //     id: 2,
  //     name: "Blue Beanie",
  //     imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
  //     price: 18,
  //   },
  // ];

  return (
    
    <>
       <div className="w-full md:px-20">
      <div className="relative w-full h-full mb-6 md:px-6 px-3">
        <h2 className="md:hidden w-[73px] h-[19px] md:mt-[22px] ml-[18px] text-[16px] font-semibold leading-[19.2px]">
          Checkout
        </h2>

        <div className="hidden md:flex w-[500px] h-[78px] flex-col">
          <h2 className="md:flex w-[500px] h-[48px] mt-[22px]  text-[40px] font-semibold leading-[48px]">
            Shopping Cart
          </h2>
          <p className="text-[18px] font-normal">
            Effortlessly manage your purchases and checkout with ease
          </p>
        </div>

        <div className="w-full h-[37px] mt-[30px] ml-[px] md:hidden items-center justify-center">
          <span className="w-[150px] h-[37px] rounded-[20px] border-[1px] bg-black text-[12px] text-white py-[10px] px-[44px]">
            Your order
          </span>
          <span className="w-[150px] h-[37px] rounded-[20px] border-[#ffdac7] text-[12px] border-[1px] text-black py-[10px] px-[24px]">
            Delivery & Payment
          </span>
        </div>

        <div className="flex flex-col w-full md:flex-row md:mt-[40px] items-center ">
          <div className=" w-full  mt-[40px]  h-full">
            {cartItems!.map((product) => (
              <Items key={product.id} product={product} />
            ))}
          </div>

          <div className=" w-[90%]  md:top-8 md:mr-10">
            <div className="md:hidden w-full h-[180px] border-[4px]  border-white ">
              <div className="w-[140px] h-[20px] ml-[16px] mt-[17px] flex flex-row">
                <GrLocation />
                <span className="w-[116px] h-[15px] text-[14px] leading-[16.44px]">
                  Delivery Location
                </span>
              </div>
              <div className="w-[226px] h-[42px] mt-[29px] ml-[50px] flex flex-row items-center border-[0.3px] px-[10px] py-[12px] ">
                <div className="w-[22px] h-[22px] rounded-[4px] p-[4px] bg-[#EDD7E7]">
                  <FaPlus />
                </div>
                <p className="text-[10px] font-medium ml-1 leading-[11.74px] w-[186px]">
                  Add Your Location and well descriptive
                </p>
              </div>
              <button className=" flex flex-row w-[59px] h-[34.62px] ml-[255px] mt-[20px] rounded-[4px] px-[4px] items-center bg-black ">
                <div>
                  <CiEdit />
                </div>
                <span className="text-white">Edit</span>
              </button>
            </div>

            <div className="w-full h-[149px] border-t-[2px] border-r-0 border-l-0 border-b-0 md:border-t-0 ">
              <h2 className="w-[180px] h-[29px] font-bold text-[24px] leading-[28.8px] mb-4">
                Order Summary
              </h2>
              <div className="w-full h-[115px] px-0 py-[6px]">
                <div className="w-full flex flex-row justify-between items-center mb-4">
                  <span className="w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]">
                    SubTotal
                  </span>
                  <span className="w-[63.21px] h-[18px] font-bold text-[14.2px]">
                    $300
                  </span>
                </div>
                <div className="w-full flex flex-row justify-between items-center mb-4">
                  <span className="w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]">
                    Zip(s)
                  </span>
                  <span className="w-[63.21px] h-[18px] font-bold text-[14.2px]">
                    $0
                  </span>
                </div>
                <div className="w-full flex flex-row justify-between items-center mb-4">
                  <span className="w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]">
                    Delivery
                  </span>
                  <span className="w-[63.21px] h-[18px] font-bold text-[14.2px]">
                    $1000
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row justify-between items-center mb-2 border-t-4 border-b-4 pt-[5px] pb-[5px]">
                <span className="w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]">
                  Total
                </span>
                <span className="w-[63.21px] h-[18px] font-bold text-[14.2px]">
                  $2000
                </span>
              </div>

              <div className="hidden md:flex w-full h-[57.89px] rounded-[8px] border-[0.49px] pl-[4px]">
                <div className="w-[20.68px] h-[29.6px] pt-[2.96px] pl-[0px] pb-[2.96px]">
                  {/* <img src={warning} alt="" /> */}
                </div>
                <p className="w-full h-[50px] font-normal leading-[25.26px] text-xs ">
                  Please your totebag will be delivered in three to five working
                  days
                </p>
              </div>
            </div>

            <div className="md:hidden w-full h-[32px] rounded-[2px] border-[0.5px] pt-[8px] pr-[197px] pb-[8px] pl-[8px] mt-14 flex flex-row">
              <span className="text-[12px] font-normal leading-[12px] align-middle">
                Payment Options
              </span>
              <div className="w-[16px] h-[16px]">
                <FaCreditCard />
              </div>
            </div>

            <button 
            className="w-full hover:bg-black hover:text-white h-[56px] rounded-[24px] border-[0.74px] md:pt-[17px] md:pl-[85px] md:pb-[17px] md:pr-[85px] mt-[30px] md:mt-[120px] bg-white"
            onClick={()=>setIs_Checkout(true)}
            >
              Proceed to CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
    {Is_Checkout && <PaymentGateWay setIs_Checkout={setIs_Checkout}/>}
    </>
   
  );
};

export default CheckoutPage;
