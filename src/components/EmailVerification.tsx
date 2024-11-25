import  { useState } from "react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");

  return (
    
      <div className="bg-red-300 h-80 md:h-full rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-lg font-semibold text-blue-600">Verify email address</h1>
        <p className="text-sm text-gray-700 mt-2">
          To verify your email, we’ve sent a One Time Password (OTP) to{" "}
          <span className="font-medium text-black">adewolekenny02@gmail.com</span>
        </p>
        <div className="mt-4">
          <label htmlFor="otp" className="block text-sm text-gray-600 mb-1">
            Enter OTP
          </label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="button"
          disabled={!otp}
          className={`w-full mt-4 py-2 rounded-lg font-medium ${
            otp
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
        <p className="mt-4 text-sm text-gray-600">
          You can send another OTP in{" "}
          <span className="font-medium text-yellow-600">Secs</span>
        </p>
        <p className="mt-2 text-sm text-gray-700">
          Already have an account?{" "}
          <span className="text-blue-500 font-medium cursor-pointer hover:underline">
            Sign in
          </span>
        </p>
      </div>
  );
};

export default VerifyEmail;