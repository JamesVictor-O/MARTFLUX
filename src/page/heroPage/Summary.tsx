import car from "/assets/car.png"
import vector2 from "/assets/vector2.png"
import Card from "/assets/card.png"
const Summary = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mx-5 md:mx-10  md:h-[12rem] bg-gray-200 gap-4 p-7 rounded-md">
         <div className="h-full flex flex-col justify-center  items-center border border-gray-500 bg-white">
            <img src={car} alt="" className="mt-1 md:mb-3 w-[2rem]" />
            <h2 className="text-base md:text-xl font-semibold leading-4 md:mb-2 text-gray-500">Free Delivery</h2>
            <span className="text-sm md:text-2xl ">for $500</span>
         </div>
         <div className="h-full flex flex-col justify-center items-center border border-gray-500 bg-white">
            <img src={vector2} alt=""  className="md:mb-3 w-[2rem] "/>
            <h2 className="text-base md:text-xl font-semibold leading-4 mb-2 text-gray-500">30 DAYS RETURN</h2>
            <span className="text-sm md:text-2xl  text-center" >Get product returned</span>
         </div>
         <div className="h-full flex flex-col justify-center items-center border border-gray-500 bg-white">
            <img src={Card} alt="" className="mb-3" />
            <h2 className="text-base md:text-xl font-semibold leading-4 mb-2 text-gray-500 text-center">PAYMENT METHOD</h2>
            <span className="text-sm md:text-2xl text-center">Dual payment method </span>
         </div>
         <div className="h-full flex flex-col justify-center items-center border border-gray-500 bg-white">
            <img src={car} alt="" className="mb-3" />
            <h2 className="text-base md:text-xl font-semibold leading-4 mb-2 text-gray-500">SUPPORT 24/7</h2>
            <span className="text-sm md:text-2xl ">Online 24 hours</span>
         </div>
    </div>
  )
}

export default Summary
