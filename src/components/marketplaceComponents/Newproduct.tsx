import { UserContext } from "../../context/contextApi/UserContext";
import { useContext } from "react";
import { CartItemProps } from "../../context/contextApi/UserContext";
import { ToastContainer, toast } from 'react-toastify';
const Newproduct = () => {
  const { products,setCartItems,cartItems } = useContext(UserContext)!;

  const handle_addItemToCart=(product:CartItemProps)=>{
     setCartItems([...cartItems,product])
     toast("item add to cart")
  }
  return (
    <div className="font-wix p-2 md:px-10">
      <h2 className="text-3xl p-3 font-bold">NEW PRODUCTS</h2>
      <p className="text-gray-600 mt-2 text-sm px-3">
        Explore our latest arrivals, carefully curated to bring you the best.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105"
          >
            <div className="w-full h-[8rem] rounded-md overflow-hidden">
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-xl">{product.productName}</h2>
              <p className="mt-2 text-xs text-gray-600">{product.vendorName}</p>
              <p className="mt-2 text-lg font-bold text-blue-500">
                ${product.price}
              </p>
            </div>
            <div className="text-left mt-4">
              <button 
                onClick={()=> handle_addItemToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Newproduct;
