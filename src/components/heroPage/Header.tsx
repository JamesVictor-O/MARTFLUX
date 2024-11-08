import { Link } from "react-router-dom";
const HeroPageHeader = () => {
  return (
    <div className="w-full h-full">
      {/* categories */}
      <section className="h-16 w-full bg-[#091952] flex items-center align-middle justify-center">
        <ul className="w-full md:w-1/2 h-10 px-4 md:px-0 flex flex-row items-center align-middle justify-between text-white">
         <Link to={"/newAccount"}>
         <li className="h-8 items-center font-bold cursor-pointer  md:">
            Hot Deals
          </li>
         </Link>
         
          <li className="h-8 items-center font-bold cursor-pointer">Men</li>
          <li className="h-8 items-center font-bold cursor-pointer hidden md:block">
            Gadgets
          </li>
          <li className="h-8 items-center font-bold cursor-pointer ">
            Furniture
          </li>
          <li className="h-8 items-center font-bold cursor-pointer hidden md:block">
            Kitchen utensils
          </li>
          <li className="h-8 items-center font-bold cursor-pointer">Arts</li>
        </ul>
      </section>
      {/* hot deals */}
      <section className="relative  w-full h-20 md:h-40 bg-[#f2da7c] flex justify-center items-center px-3">
        <div className="w-20  md:w-44 md:h-[70%] md:absolute left-20">
          <img
            src="src/assets/discount coupons.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <h2 className="md:w-2/4  text-sm md:text-2xl font-bold md:font-normal text-[#1040E9] text-center leading-8]">
          NOVEMBER BLACK FRIDAY DEAL 15% OFF FOR ALL PRODUCTS
        </h2>
      </section>
    </div>
  );
};

export default HeroPageHeader;
