const SelectIndustry = () => {
  return (
    <div className=" bg-white md:w-[40rem] py-5 px-10 rounded-md text-white border border-gray-300 md:text-black ">
          <h2 className="text-2xl text-blue-500">Select category</h2>
          <p className="font-wix my-6 text-black">
            We'll use your industry to suggest a campaign goal that's relevant
            to your business. You can update this information in Ad account
            settings at any time.
          </p>
          <select name="" id="" className="w-full outline-none h-[2.4rem] rounded-lg px-3">
            <option disabled>select categorie</option>
            <option value="">Fashion</option>
            <option value="">Computers</option>
            <option value="">Laptops</option>
          </select>
          <div className="w-full flex flex-row justify-end mt-9" >
            <button className="font-wix bg-blue-100 px-5 py-2 rounded">Back</button>
            <button className="font-wix bg-[#8A8FA1] px-5 py-2 rounded ml-4">next</button>
          </div>
        </div>
  )
}

export default SelectIndustry
