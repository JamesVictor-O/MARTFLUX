import { createContext, useState } from "react";

export const SliderContext = createContext<any>(null);

const AppContext = ({children}:any) => {
  let [isMenuOpen, setIsMenuOpen]=useState<boolean>(false)


  const contextValue = { isMenuOpen,setIsMenuOpen };

  return (
    <SliderContext.Provider value={contextValue}>
      {children}
    </SliderContext.Provider>
  );
};

export default AppContext;