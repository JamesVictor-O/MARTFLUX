import cartIcon from "/shopping-cart.png"
import iwatch from "/public/iPhone2.jpg"
const Hotsales = () => {
    return (
        <div className="w-full px-3 md:px-10 mb-9">
          <div className=" w-full px-10 h-[8rem] flex flex-col md:flex-row items-center align-middle justify-center  ">
            <h2 className="md:text-3xl  font-semibold  mb-2  font-wix md:w-[26rem] mr-4">
              Featured products
            </h2>
            <span className="hidden md:block mx-4 h-[6rem] border-r border-black"></span>
            <p className="text-sm md:text-base font-normal text-gray-500 font-wix text-left md:w-[20rem] ml-6">
              With ease find the latest products missing in your homes, office and
              workshops.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="relative md:w-[20rem] h-[20rem]">
              <img src={iwatch} alt="iWatch" className="w-full h-full rounded-md" />
              <div className="bg-white w-[2.5rem]">
                <img
                  src={cartIcon}
                  alt="Cart Icon"
                  className="absolute bottom-4 right-4 object-contain w-[2.3rem] rounded-full bg-white p-2"
                />
              </div>
            </div>
            <div className="relative md:w-[20rem] h-[20rem]">
              <img src={iwatch} alt="iWatch" className="w-full h-full rounded-md" />
              <div className="bg-white w-[2.5rem]">
                <img
                  src={cartIcon}
                  alt="Cart Icon"
                  className="absolute bottom-4 right-4 object-contain w-[2.3rem] rounded-full bg-white p-2"
                />
              </div>
            </div>
            <div className="relative md:w-[20rem] h-[20rem]">
              <img src={iwatch} alt="iWatch" className="w-full h-full rounded-md" />
              <div className="bg-white w-[2.5rem]">
                <img
                  src={cartIcon}
                  alt="Cart Icon"
                  className="absolute bottom-4 right-4 object-contain w-[2.3rem] rounded-full bg-white p-2"
                />
              </div>
            </div>
            <div className="relative md:w-[20rem] h-[20rem]">
              <img src={iwatch} alt="iWatch" className="w-full h-full rounded-md" />
              <div className="bg-white w-[2.5rem]">
                <img
                  src={cartIcon}
                  alt="Cart Icon"
                  className="absolute bottom-4 right-4 object-contain w-[2.3rem] rounded-full bg-white p-2"
                />
              </div>
            </div>
          </div>

        </div>
    ) 
}

export default Hotsales
