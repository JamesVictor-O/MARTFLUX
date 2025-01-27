import watch from "/watch.jpg"
import Bags from "/bag.jpg"
import Shoes from "/shoe.jpg"
import Phones from "/iPhone.jpg"
import Kitchen from "/kitech.jpg"
import Books from "/books.jpg"
import Cream from "/bodyCream.jpg"
import Caps from "/caps.jpg"


const Category = () => {
  return (
    <div className="mb-10 mx-2">
        <div className=" w-full px-4 md:px-10 h-[8rem] flex flex-col md:flex-row items-center align-middle justify-center  ">
            <h2 className="md:text-xl font-medium  md:mb-2 font-wix md:w-[26rem] md:mr-4 mb-2">Categories of products, all for you.</h2>
            <span className="hidden md:block mx-4 h-[6rem] border-r border-black"></span>
            <p className="text-base font-normal text-gray-500 font-wix md:text-left text-center ">With ease find the latest products missing in your homes, office and workshops.</p>
        </div>
        {/* categorie container */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-y-5  gap-5 bg-[#FFF5CB] px-10 md:px-20 py-10">
            {/* categories 1 */}
            <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={watch} alt="watch" className="object-cover w-full h-full" loading="lazy" />
                </div>
                <span className="text-2xl font-semibold mt-3 font-wix">watches</span>
            </div>
              {/* categories 1 */}
              <div className="flex flex-col items-center md:w-[20rem] ">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Bags} alt="watch" className="object-cover w-full h-full" loading="lazy"/>
                </div>
                <span className="text-2xl font-semibold mt-3 font-wix">Bags</span>
            </div>
             {/* categories 1 */}
             <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Shoes} alt="watch" className="object-cover w-full h-full" loading="lazy"/>
                </div>
                <span className="text-2xl font-semibold mt-3 font-wix">Shoes</span>
            </div>
             {/* categories 1 */}
             <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Phones} alt="watch" className="object-cover w-full h-full" loading="lazy"/>
                </div>
                <span className="text-2xl font-semibold mt-3 font-wix">Phones</span>
            </div>
             {/* categories 1 */}
             <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Kitchen} alt="watch" className="object-cover w-full h-full" loading="lazy"/>
                </div>
                <span className="text-2xl font-semibold mt-3 font-wix text-center">Kitchen utensils</span>
            </div>
              {/* categories 1 */}
              <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Caps} alt="watch" className="object-cover w-full h-full" loading="lazy"/>
                </div>
                <span className="text-2xl font-semibold mt-3 font-wix">Caps</span>
            </div>
             {/* categories 1 */}
             <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Books} alt="watch" className="object-cover w-full h-full" loading="lazy" />
                </div>
                <span className="text-2xl font-semibold mt-3 font-wix text-center">Books and Notepads</span>
            </div>
            {/* categories 1 */}
            <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Cream} alt="watch" className="object-cover w-full h-full" loading="lazy"/>
                </div>
                <span className="text-2xl font-semibold mt-3 font-wix text-center">Body lotions</span>
            </div>
             
        </div>
    </div>
  )
}

export default Category
