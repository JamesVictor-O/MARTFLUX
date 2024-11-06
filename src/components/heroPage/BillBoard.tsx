
const BillBoard = () => {
  return (
    <div className="w-full flex flex-row justify-between p-4" >
        {/* first product */}
       <div className="w-[30rem] h-[37rem]  rounded-3xl">
          <img src="/src/assets/Frame 65.png" alt="" className="w-full h-full object-fit overflow-hidden" />
       </div>
       {/* second product */}
       <div className="w-[30rem] h-[37rem] rounded-3xl">
          <img src="/src/assets/Still life of hanging  bag.png" alt="" className="w-full h-full object-fit overflow-hidden" />
       </div>
      
       {/* third product */}
       <div className="w-[30rem] h-[37rem]  rounded-3xl">
          <img src="/src/assets/Frame 65.png" alt="" className="w-full h-full object-fit overflow-hidden" />
       </div>
    </div>
  )
}

export default BillBoard
