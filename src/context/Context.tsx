import { createContext, useState } from "react";


export const SliderContext = createContext<any>(null);

const AppContext = ({children}:any) => {


  const [isMenuOpen, setIsMenuOpen]=useState<boolean>(false)
  const [accountType,setAccountType]=useState<String | null>(null)
   const handle_toggle_menu=()=>{
     setIsMenuOpen(!isMenuOpen)
   }

  const contextValue = { 
    isMenuOpen,
    setIsMenuOpen,
    handle_toggle_menu,
    accountType,
    setAccountType
  };

  

  return (
    <SliderContext.Provider value={contextValue}>
      {children}
    </SliderContext.Provider>
  );
};

export default AppContext;