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
    <div className="px-10 mb-10">
        <div className="w-full h-[4rem] ">
            <h2 className="text-2xl font-semibold font-sans mb-2 text-center md:text-left">Shop by category</h2>
            <p className="text-xl font-normal text-gray-500 text-center md:text-left">Get All home,office, housing and workspace items on the go. Find all at once for you and your love once</p>
        </div>
        {/* categorie container */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-y-5 mt-24 md:mt-8 gap-5 ">
            {/* categories 1 */}
            <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={watch} alt="watch" className="object-cover w-full h-full" />
                </div>
                <span className="text-2xl font-semibold mt-3">watches</span>
            </div>
              {/* categories 1 */}
              <div className="flex flex-col items-center md:w-[20rem] ">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Bags} alt="watch" className="object-cover w-full h-full" />
                </div>
                <span className="text-2xl font-semibold mt-3">Bags</span>
            </div>
             {/* categories 1 */}
             <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Shoes} alt="watch" className="object-cover w-full h-full" />
                </div>
                <span className="text-2xl font-semibold mt-3">Shoes</span>
            </div>
             {/* categories 1 */}
             <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Phones} alt="watch" className="object-cover w-full h-full" />
                </div>
                <span className="text-2xl font-semibold mt-3">Phones</span>
            </div>
             {/* categories 1 */}
             <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Kitchen} alt="watch" className="object-cover w-full h-full" />
                </div>
                <span className="text-2xl font-semibold mt-3">Kitchen utensils</span>
            </div>
              {/* categories 1 */}
              <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Caps} alt="watch" className="object-cover w-full h-full" />
                </div>
                <span className="text-2xl font-semibold mt-3">Caps</span>
            </div>
             {/* categories 1 */}
             <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Books} alt="watch" className="object-cover w-full h-full" />
                </div>
                <span className="text-2xl font-semibold mt-3">Books and Notepads</span>
            </div>
            {/* categories 1 */}
            <div className="flex flex-col items-center md:w-[20rem]">
                <div className="rounded-lg h-[10rem] md:h-[20rem] w-full overflow-hidden">
                   <img src={Cream} alt="watch" className="object-cover w-full h-full" />
                </div>
                <span className="text-2xl font-semibold mt-3">Body lotions</span>
            </div>
             
        </div>
    </div>
  )
}

export default Category
