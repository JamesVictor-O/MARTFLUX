import Shoes from "/public/caps.jpg";
const CategorieComponent = () => {
  return (
    <div className="font-wix px-4 md:px-10">
      <h2 className="text-3xl font-bold">CATEGORIES</h2>
      <p className="text-gray-600 mt-2 text-sm">
        Discover a variety of categories tailored to meet all your needs.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-8">
        {[
          {
            name: "Fashion",
            description:
              "Trendy clothing and accessories to elevate your style.",
            image: Shoes, // Replace this with a suitable image for Fashion
            tags: ["Trending", "Stylish", "Affordable"],
          },
          {
            name: "Electronics",
            description: "Latest gadgets and devices to keep you ahead.",
            image: Shoes, // Replace this with a suitable image for Electronics
            tags: ["Innovative", "Top Rated", "Best Deals"],
          },
          {
            name: "Home Appliances",
            description: "Efficient and modern appliances for your home.",
            image: Shoes, // Replace this with a suitable image for Home Appliances
            tags: ["Energy Saving", "Durable", "Essential"],
          },
          {
            name: "Sports & Fitness",
            description: "Gear and accessories to keep you active and healthy.",
            image: Shoes, // Replace this with a suitable image for Sports
            tags: ["Durable", "High Performance", "Affordable"],
          },
          {
            name: "Beauty & Health",
            description: "Quality products for personal care and wellness.",
            image: Shoes, // Replace this with a suitable image for Beauty
            tags: ["Natural", "Effective", "Safe"],
          },
        ].map((category, index) => (
          <div
            key={index}
            className="flex flex-col bg-white md:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105"
          >
            <div className="w-full h-[8rem] rounded-md overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-xl">{category.name}</h2>
              <p className="mt-2 text-xs text-gray-600">
                {category.description}
              </p>
            </div>
            {/* Category tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {category.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorieComponent;
