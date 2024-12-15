import { ReactNode } from "react";
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { User } from "firebase/auth";



export interface CartItemProps{
  id:number 
  price:number,
  productImage:string,
  productName:string,
  quantity:number,
  vendorName:string
}

interface UserContextType {
    products:CartItemProps[]
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    accountType: string | null;
    setAccountType: Dispatch<SetStateAction<string | null>>;
    currentUser: User | null;
    setCurrentUser: Dispatch<SetStateAction<User |null>>;
    setProducts:Dispatch<SetStateAction<CartItemProps[]>>;
    cartItems:CartItemProps[];
    setCartItems:Dispatch<SetStateAction<CartItemProps[]>>;
}


export const UserContext = createContext<UserContextType | null>(null);
interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [accountType, setAccountType] = useState<string | null>(null);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [products, setProducts] = useState<CartItemProps[]>([]);
    const [cartItems,setCartItems]=useState<CartItemProps[]>([])

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    accountType,
    setAccountType,
    currentUser,
    setCurrentUser,
    products,
    setProducts,
    cartItems,
    setCartItems
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
