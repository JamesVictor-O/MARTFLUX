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

        <div className="w-full md:h-[20rem] flex flex-col md:flex-row items-center">
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
      <section className="w-full px-5 md:px-20 font-wix mt-8 flex flex-col items-center">
        <h2 className="font-bold text-2xl mb-4">Team Members</h2>
        <div className="flex justify-center items-center w-full align-middle mt-7">
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
                  <label htmlFor="" className="font-bold text-xl">Role:</label>
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
                  <label htmlFor="" className="font-bold text-xl">Role:</label>
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
                  <label htmlFor="" className="font-bold text-xl">Role:</label>
                  <span className="ml-2">Frontend developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
