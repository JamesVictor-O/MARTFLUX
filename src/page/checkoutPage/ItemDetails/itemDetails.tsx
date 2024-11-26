import { FaRegStar } from "react-icons/fa";

const ItemDetails = ({ product }) => {
    return (
      <div className="ml-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <div className="flex items-center space-x-2 mt-1">
          <FaRegStar className="text-yellow-500" />
          <span className="text-sm text-gray-600">4.5</span>
        </div>
        <div className="hidden md:flex flex-row items-center space-x-2 mt-4">
          <span className="text-gray-500 text-sm">Vendor:FashionVilla</span>
          <span className="text-gray-800 text-sm font-medium">{product.color}</span>
        </div>
      </div>
    );
  };

export default ItemDetails
