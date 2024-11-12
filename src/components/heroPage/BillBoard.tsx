import billBoard from "/public/assets/Frame.png"
import bilBoard2 from "/public/assets/Still life of hanging  bag.png"
import billBoard3 from "/public/assets/Frame.png"
const BillBoard = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-20" >
        {/* first product */}
       <div className="h-[10rem] w-[10rem] md:w-[20rem] md:h-[20rem]  rounded-2xl">
          <img src={billBoard} alt="" className="w-full h-full object-fit overflow-hidden" />
       </div>
       {/* second product */}
       <div className="h-[10rem] w-[10rem] md:w-[20rem] md:h-[20rem]  rounded-2xl">
          <img src={bilBoard2} alt="" className="w-full h-full object-fit overflow-hidden" />
       </div>
      
       {/* third product */}
       <div className="hidden md:block relative w-[20rem] h-[20rem]  rounded-2xl ">
          <img src={billBoard3} alt="" className="w-full h-full object-fit overflow-hidden" />
          {/* <button className="absolute">shop now</button> */}
       </div>
    </div>
  )
}

export default BillBoard
