import { useState } from "react"

import BusinessAccountForm from "../../components/createAccountComponents/BusinessAccountForm"
const VendorInformationSection = () => {
  const [nextIndex,_setNextIndex]=useState<number>(0)
  // const handleNext=()=>{
  //   if(nextIndex < requiredDetails.length){
  //     setNextIndex(prev => prev + 1)
  //   }
  // }
  let  requiredDetails=[
    <BusinessAccountForm />,
  ]
  return (
    <div className=" w-[90%] h-full">
        {requiredDetails[nextIndex]}
      {/* <CreateVendorsAccount/> */}
    </div>
  )
}

export default VendorInformationSection
