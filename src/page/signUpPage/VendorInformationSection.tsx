import { useState } from "react"
import ListingIndustry from "../../components/ListingIndustry"
import BusinessAccountForm from "../../components/createAccountComponents/BusinessAccountForm"
import SelectIndustry from "../../components/SelectIndustry"
const VendorInformationSection = () => {
  const [nextIndex,setNextIndex]=useState<number>(0)
  const handleNext=()=>{
    if(nextIndex < requiredDetails.length){
      setNextIndex(prev => prev + 1)
    }
  }
  let  requiredDetails=[
    <BusinessAccountForm handleNext={handleNext} />,
    <ListingIndustry/>,
    <SelectIndustry/>
  ]
  return (
    <div className=" w-[90%] h-full">
        {requiredDetails[nextIndex]}
      {/* <CreateVendorsAccount/> */}
    </div>
  )
}

export default VendorInformationSection
