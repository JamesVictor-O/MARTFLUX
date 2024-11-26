import BillBoard from "../../components/heroPage/BillBoard";
import Shoes from "/public/caps.jpg";
import star2 from "/public/star2.png";
import Newproduct from "../../components/marketplaceComponents/Newproduct";
import CategorieComponent from "../../components/marketplaceComponents/CategorieComponent";

const MarketPlace = () => {
  return (
    <div className="w-full h-full bg-gray-50">
      <BillBoard />
      <CategorieComponent/>
      {/* Feature products */}
      <div className="font-wix mt-20 px-10 mb-8">
        <h2 className="text-3xl font-bold">FEATURED PRODUCTS</h2>
        {/* products */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-[10rem] rounded-md overflow-hidden">
                <img
                  src={Shoes}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-row items-center justify-between w-full mt-2">
                <h2 className="font-bold text-lg">$400</h2>
                <p className="text-sm font-normal text-gray-500">Clothing</p>
              </div>

              {/* product title and ratings */}
              <div className="flex flex-row justify-between items-center my-2">
                <p className="text-base font-semibold">Nike Cap</p>
                <div className="flex flex-row items-center bg-gray-300 w-10 rounded-md px-1">
                  <span className="text-xs">3.0</span>
                  <img
                    src={star2}
                    alt="Rating Star"
                    className="text-yellow-600 w-3 ml-1 h-4 mb-1"
                  />
                </div>
              </div>

              {/* Add to cart button */}
              <div className="text-left mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Newproduct/>
    </div>
  );
};

export default MarketPlace;
