import file from "/public/document.png"
const VendorDashBoard = () => {
  return (
    <div className="flex items-center justify-center my-10">
       <div className="flex flex-col items-center border border-gray-300 w-[70%] py-20 rounded-lg">
        <div className="w-[7rem] h-[7rem]">
         <img src={file} alt="" />
        </div>
        
       <span>Drag and drop an image here</span>
       <span>or</span>
       <div className="">
       <input type="file" placeholder="select image"/>
       </div>
       </div>
    </div>
  )
}

export default VendorDashBoard
