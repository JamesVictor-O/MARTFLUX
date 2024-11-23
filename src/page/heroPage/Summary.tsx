import car from "/assets/car.png"
import vector2 from "/assets/vector2.png"
import Card from "/assets/card.png"
const Summary = () => {
  return (
   <div className="w-full">
        <div className=" w-full px-10 md:h-[8rem] flex items-center align-middle justify-center  ">
            <h2 className="md:text-3xl  font-semibold  mb-2  font-wix md:w-[26rem] mr-4">What we offer?</h2>
            <span className="mx-4 h-[6rem] border-r border-black"></span>
            <p className="text-base font-normal text-gray-500 font-wix text-left ">With ease find the latest procuts missing in your homes, office and workshops.</p>
        </div>

    <div className="grid grid-cols-2 md:grid-cols-4 mx-2  md:h-[12rem] bg-[#FFF5CB] gap-4 p-7 rounded-md font-wix">
         <div className="h-full flex flex-col justify-center  items-center border border-gray-500 bg-white p-2 rounded-md" >
            <img src={car} alt="" className="mt-1 mb-3 " />
            <h2 className="text-base  md:text-xl font-semibold leading-4 md:mb-2 text-gray-500">Free Delivery</h2>
            <span className="text-sm md:text-2xl ">for $500</span>
         </div>
         <div className="h-full flex flex-col justify-center items-center border border-gray-500 bg-white p-2 rounded-md">
            <img src={vector2} alt=""  className="md:mb-3  "/>
            <h2 className="text-base md:text-xl font-semibold leading-4 mb-2 text-center text-gray-500">30 DAYS RETURN</h2>
            <span className="text-sm md:text-2xl  text-center" >Get product returned</span>
         </div>
         <div className="h-full flex flex-col justify-center items-center border border-gray-500 bg-white p-2 rounded-md">
            <img src={Card} alt="" className="mb-3" />
            <h2 className="text-base md:text-xl font-semibold leading-4 mb-2 text-gray-500 text-center">PAYMENT METHOD</h2>
            <span className="text-sm md:text-2xl text-center">Dual payment method </span>
         </div>
         <div className="h-full flex flex-col justify-center items-center border border-gray-500 bg-white p-2 rounded-md">
            <img src={car} alt="" className="mb-3" />
            <h2 className="text-base md:text-xl font-semibold leading-4 mb-2 text-gray-500">SUPPORT 24/7</h2>
            <span className="text-sm md:text-2xl ">Online 24 hours</span>
         </div>
    </div>
   </div>
    
  )
}

export default Summary
