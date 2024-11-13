import { Children, createContext, useState } from "react";

export const SliderContext = createContext<any>(null);

const AppContext = ({children}:any) => {
  let [isMenuOpen, setIsMenuOpen]=useState<boolean>(false)


  const contextValue = { isMenuOpen };

  return (
    <SliderContext.Provider value={contextValue}>
      {children}
    </SliderContext.Provider>
  );
};

export default AppContext;