import { FaCreditCard } from "react-icons/fa6";

interface PaymentProps{
  setIs_Checkout:(value:boolean)=> void
}
const PaymentGateWay = ({setIs_Checkout}:PaymentProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-gray-100 w-[90%] md:w-[720px] rounded-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold">Payment Method</h2>
          <p className="hidden md:block text-gray-600 text-sm mt-2">
            Effortlessly manage your purchases and checkout with ease.
          </p>
        </div>
        {/* payment option */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Select Payment Currency
          </h2>
          <div className="flex flex-row gap-4 md:w-[30rem]">
            <button className="flex flex-col items-center p-4 rounded-lg border border-gray-300 shadow-sm hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out">
              <span className="font-semibold text-lg text-gray-800">
                Nigerian Naira (₦)
              </span>
              <span className="mt-2 font-medium text-gray-500">#30,000</span>
            </button>
            <button className="flex flex-col items-center p-4 rounded-lg border border-gray-300 shadow-sm hover:border-green-500 hover:shadow-lg transition duration-300 ease-in-out">
              <span className="font-semibold text-lg text-gray-800">
                US Dollar ($)
              </span>
              <span className="mt-2 font-medium text-gray-500">$300</span>
            </button>
            <button className="flex flex-col items-center p-4 rounded-lg border border-gray-300 shadow-sm hover:border-green-500 hover:shadow-lg transition duration-300 ease-in-out">
              <span className="font-semibold text-lg text-gray-800">
                Crypto (Btc)
              </span>
              <span className="mt-2 font-medium text-gray-500">0.004Btc</span>
            </button>
          </div>
        </div>

        {/* Card Display */}
        <div className="bg-blue-800 text-white rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold">Debit Card</span>
            <span className="text-sm font-bold">Bank Name</span>
          </div>
          <div className="text-lg font-extrabold tracking-wide">
            5355 0348 5945 5045
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>
              <p className="text-xs font-semibold mb-1">Valid Thru</p>
              <span className="text-sm font-semibold">12/24</span>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold">JAMES VICTOR OCHULA</p>
            </div>
            <FaCreditCard className="w-12 h-8 object-contain" />
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              placeholder="5355 0348 5945 5045"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                placeholder="052"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Expires
              </label>
              <input
                type="text"
                placeholder="05/2024"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="save-card" className="form-checkbox" />
            <label htmlFor="save-card" className="text-sm text-gray-700">
              Save your debit card information
            </label>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-6">
          <button
              onClick={()=> setIs_Checkout(false)}
            className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateWay;
