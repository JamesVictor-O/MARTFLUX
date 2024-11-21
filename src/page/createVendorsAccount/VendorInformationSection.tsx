import { useState } from "react"
import ListingIndustry from "../../components/ListingIndustry"
import CreateVendorsAccount from "../../components/createAccountComponents/CreateVendorsAccount"
import SelectIndustry from "../../components/SelectIndustry"
const VendorInformationSection = () => {
  const [nextIndex,setNextIndex]=useState<number>(0)
  const handleNext=()=>{
    if(nextIndex < requiredDetails.length){
      setNextIndex(prev => prev + 1)
    }
    console.log(nextIndex)
  }
  let  requiredDetails=[
    <CreateVendorsAccount handleNext={handleNext} />,
    <ListingIndustry/>,
    <SelectIndustry/>
  ]
  return (
    <div>
        {requiredDetails[nextIndex]}
      {/* <CreateVendorsAccount/> */}
    </div>
  )
}

export default VendorInformationSection
