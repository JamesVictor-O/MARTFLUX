import AccountType from "../../components/createAccountComponents/AccountType"

const CreateAccountLandingPage = () => {
  return (
    <div className="w-full h-screen md:h-full md:p-5 flex flex-row justify-center items-center">
         {/* account creation section */}
         <div className="w-full h-full md:w-[50%] md:h-full flex md:items-center justify-center  align-middle ">
           <AccountType/>
         </div>
         {/* image */}
         {/* <div className="hidden md:flex w-[50%] h-[55rem] bg-white rounded-md overflow-hidden">
           <img src={createImage} alt="" className="w-full h-full object-cover" />
         </div> */}
    </div>
  )
}

export default CreateAccountLandingPage
