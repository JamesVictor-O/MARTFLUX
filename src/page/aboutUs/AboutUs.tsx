const AboutUs = () => {
  return (
    <div className="w-full h-full mb-6">
      {/* About us */}
      <section className="w-full px-5 md:px-20 font-wix mt-8 flex flex-col items-center">
        <h2 className="font-bold text-2xl mb-4">About us</h2>
        <p className="text-gray-400 font-semibold">
          The African e-commerce landscape faces significant challenges that
          have long hindered digital commerce across the continent. Traditional
          online marketplaces struggle with complex payment systems, limited
          transaction capabilities, high costs, and a lack of trust in online
          platforms.These barriers have prevented millions of African consumers
          and entrepreneurs from fully participating in the digital economy.
          E-commerce platforms have often been designed with a one-size-fits-all
          approach, overlooking the unique needs of African markets.
        </p>

        <div className="flex flex-col w-full">
          <h2 className="my-2 font-wix font-normal">
            MartFlux was born from a vision to solve these fundamental
            challenges. Our mission is to create an e-commerce platform that:
          </h2>

          <div>
            <ul className="list-decimal ml-4 text-gray-400 font-semibold">
              <li>Simplifies online transactions</li>
              <li>Builds trust through transparency and security</li>
              <li>Enables seamless digital commerce</li>
              <li>Builds trust through transparency and security</li>
            </ul>
          </div>
        </div>
      </section>

      {/* core values */}
      <section className="w-full px-5 md:px-20 font-wix mt-8 flex flex-col items-center">
        <h2 className="font-bold text-2xl mb-4">Core values</h2>

        <div className="w-full md:h-[20rem] flex flex-col md:flex-row items-center mt-6">
          {/* core value image */}
          <div className="w-full md:w-[30%] h-full rounded-lg overflow-hidden">
            <img
              src="/public/coreValue.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* core values  */}

          <div className="ml-6">
            <ul className="list-decimal mt-4 md:mt-0 md:ml-4 text-gray-400 font-semibold">
              <div>
                <li>Empowerment</li>
                <p>
                  Enabling both businesses and consumers to thrive in the
                  digital marketplace.
                </p>
              </div>
              <div>
                <li>Accessibility</li>
                <p>Breaking down barriers to online commerce for everyone.</p>
              </div>
              <div>
                <li>Innovation</li>
                <p>
                  Continuously evolving to meet the dynamic needs of African
                  markets
                </p>
              </div>
              <div>
                <li>Trust</li>
                <p>
                  Building a secure, transparent platform that customers and
                  sellers can rely on
                </p>
              </div>
              <div>
                <li>Inclusivity</li>
                <p>
                  Creating opportunities for all participants in the digital
                  economy.
                </p>
              </div>
            </ul>
          </div>
        </div>
      </section>

      {/* Team members */}
      <section className="w-full px-5 md:px-20 font-wix mt-8 flex flex-col items-center ">
        <h2 className="font-bold text-2xl mb-4">Team Members</h2>
        <div className="flex justify-center items-center w-full align-middle mt-11">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="flex flex-col">
              <div>
                <img src="/public/team.png" alt="" />
              </div>
              <div className="mt-5">
                <div>
                  <label htmlFor="" className="font-bold text-xl">
                    Name :
                  </label>
                  <span>James Victor</span>
                </div>
                <div>
                  <label htmlFor="" className="font-bold text-xl">
                    Role:
                  </label>
                  <span>Frontend developer</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div>
                <img src="/public/team.png" alt="" />
              </div>
              <div className="mt-5">
                <div>
                  <label htmlFor="" className="font-bold text-xl">
                    Name :
                  </label>
                  <span className="ml-2">James Victor</span>
                </div>
                <div>
                  <label htmlFor="" className="font-bold text-xl">
                    Role:
                  </label>
                  <span className="ml-2">Frontend developer</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <img src="/public/team.png" alt="" />
              </div>
              <div className="mt-5">
                <div>
                  <label htmlFor="" className="font-bold text-xl">
                    Name :
                  </label>
                  <span className="ml-2">James Victor</span>
                </div>
                <div>
                  <label htmlFor="" className="font-bold text-xl">
                    Role:
                  </label>
                  <span className="ml-2">Frontend developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* customer Review */}
      <section className="w-full px-5 md:px-20 font-wix mt-10 flex flex-col items-center ">
        <div className="flex flex-col items-center font-wix ">
          <h2 className="text-2xl font-bold my-2">Customers Reviews</h2>
          <p className="font-medium text-gray-400 text-base md:text-xl">
            We are here to meet our customers needs{" "}
          </p>
        </div>
        {/* review section */}
        <div className=" w-full grid md:grid-cols-4 gap-7 mt-7">
          {/* review */}
          <div className="w-[21rem] bg-gradient-to-r from-[#FBDEF3] to-[#b5a8b1] p-4 px-7 rounded-md">
            {/* customer details */}
            <div className="flex flex-row items-center w-[60%]">
              <div className="w-[3rem] rounded-[50%] overflow-hidden">
                <img
                  src="/public/team.png"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="ml-3 w-full">
                <h2 className="font-bold text-lg font-wix">Dada moses</h2>
                <p className="font-normal text-base">Customer</p>
              </div>
            </div>
            {/* custmer review */}
            <p className="font-wix my-4">
              I recently shopped at MartFlux and had a positive experience, it
              was easy to navigate with a great search feature, impressive
              detailed descriptions and quality images helped in
              decision-making.
            </p>
            {/* customer rating */}
            <div className="flex flex-row items-center">
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
            </div>
          </div>

          <div className="w-[21rem] bg-gradient-to-r from-[#FBDEF3] to-[#b5a8b1] p-4 px-7 rounded-md">
            {/* customer details */}
            <div className="flex flex-row items-center w-[60%]">
              <div className="w-[3rem] rounded-[50%] overflow-hidden">
                <img
                  src="/public/team.png"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="ml-3 w-full">
                <h2 className="font-bold text-lg font-wix">Dada moses</h2>
                <p className="font-normal text-base">Customer</p>
              </div>
            </div>
            {/* custmer review */}
            <p className="font-wix my-4">
              I recently shopped at MartFlux and had a positive experience, it
              was easy to navigate with a great search feature, impressive
              detailed descriptions and quality images helped in
              decision-making.
            </p>
            {/* customer rating */}
            <div className="flex flex-row items-center">
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
            </div>
          </div>

          <div className="w-[21rem] bg-gradient-to-r from-[#FBDEF3] to-[#b5a8b1] p-4 px-7 rounded-md">
            {/* customer details */}
            <div className="flex flex-row items-center w-[60%]">
              <div className="w-[3rem] rounded-[50%] overflow-hidden">
                <img
                  src="/public/team.png"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="ml-3 w-full">
                <h2 className="font-bold text-lg font-wix">Dada moses</h2>
                <p className="font-normal text-base">Customer</p>
              </div>
            </div>
            {/* custmer review */}
            <p className="font-wix my-4">
              I recently shopped at MartFlux and had a positive experience, it
              was easy to navigate with a great search feature, impressive
              detailed descriptions and quality images helped in
              decision-making.
            </p>
            {/* customer rating */}
            <div className="flex flex-row items-center">
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
            </div>
          </div>
          <div className="w-[21rem] bg-gradient-to-r from-[#FBDEF3] to-[#b5a8b1] p-4 px-7 rounded-md">
            {/* customer details */}
            <div className="flex flex-row items-center w-[60%]">
              <div className="w-[3rem] rounded-[50%] overflow-hidden">
                <img
                  src="/public/team.png"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="ml-3 w-full">
                <h2 className="font-bold text-lg font-wix">Dada moses</h2>
                <p className="font-normal text-base">Customer</p>
              </div>
            </div>
            {/* custmer review */}
            <p className="font-wix my-4">
              I recently shopped at MartFlux and had a positive experience, it
              was easy to navigate with a great search feature, impressive
              detailed descriptions and quality images helped in
              decision-making.
            </p>
            {/* customer rating */}
            <div className="flex flex-row items-center">
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
              <img
                src="/public/star 2.png"
                alt=""
                className="text-yellow-600 w-[1rem] ml-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* sign up section */}
      <section className="w-full px-5 md:px-20 font-wix mt-10 flex flex-col items-center my-8">
        <div className="flex flex-col items-center font-wix ">
          <h2 className="text-3xl font-bold my-2 text-center">The only one stop for qualty products</h2>
          <p className="font-medium text-gray-400 text-base md:text-xl">
          We are here to meet our your needs  {" "}
          </p>
        </div>
        <div className=" text-white rounded-md overflow-hidden w-full md:w-[25rem]  flex flex-row items-center justify-between mt-4">
          
          <button className="w-full h-full py-4 px-4 border-b-2 rounded-2xl justify-between border bg-gray-500">Shop now</button>
          <button className="w-[20rem] h-full py-4 px-4 text-white bg-[#F3C300] border-b-2 rounded-2xl justify-between border ml-4">Become a Vendor</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
