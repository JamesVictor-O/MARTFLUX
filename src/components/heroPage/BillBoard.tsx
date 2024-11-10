import billBoard from "/public/assets/Frame.png"
import bilBoard2 from "/public/assets/Still life of hanging  bag.png"
import billBoard3 from "/public/assets/Frame.png"
const BillBoard = () => {
  return (
    <div className="w-full flex flex-row justify-between p-4" >
        {/* first product */}
       <div className="w-[30rem] h-[37rem]  rounded-3xl">
          <img src={billBoard} alt="" className="w-full h-full object-fit overflow-hidden" />
       </div>
       {/* second product */}
       <div className="w-[30rem] h-[37rem] rounded-3xl">
          <img src={bilBoard2} alt="" className="w-full h-full object-fit overflow-hidden" />
       </div>
      
       {/* third product */}
       <div className="w-[30rem] h-[37rem]  rounded-3xl">
          <img src={billBoard3} alt="" className="w-full h-full object-fit overflow-hidden" />
       </div>
    </div>
  )
}

export default BillBoard
