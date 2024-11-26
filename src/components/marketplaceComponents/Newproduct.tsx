import Shoes from "/public/caps.jpg";
const Newproduct = () => {
  return (
    <div className="font-wix px-10">
  <h2 className="text-3xl font-bold">NEW PRODUCTS</h2>
  <p className="text-gray-600 mt-2 text-sm">
    Explore our latest arrivals, carefully curated to bring you the best.
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
    {[
      {
        name: "Wireless Headphones",
        description: "Experience superior sound quality with these stylish headphones.",
        price: "$199",
        image: Shoes, // Replace with a suitable image for the product
        tags: ["Best Seller", "High Quality", "New Arrival"],
      },
      {
        name: "Smartwatch Pro",
        description: "Track your fitness and stay connected on the go.",
        price: "$249",
        image: Shoes, // Replace with a suitable image for the product
        tags: ["Top Rated", "Stylish", "Tech Trend"],
      },
      {
        name: "Eco-Friendly Sneakers",
        description: "Step into comfort with these sustainable sneakers.",
        price: "$99",
        image: Shoes, // Replace with a suitable image for the product
        tags: ["Eco-Friendly", "Comfortable", "Trending"],
      },
      {
        name: "4K Ultra HD TV",
        description: "Enjoy stunning visuals with this top-of-the-line TV.",
        price: "$599",
        image: Shoes, // Replace with a suitable image for the product
        tags: ["Crystal Clear", "Best Value", "Limited Stock"],
      },
      {
        name: "Luxury Perfume",
        description: "Indulge in elegance with this captivating fragrance.",
        price: "$150",
        image: Shoes, // Replace with a suitable image for the product
        tags: ["Elegant", "Long-Lasting", "Exclusive"],
      },
    ].map((product, index) => (
      <div
        key={index}
        className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105"
      >
        <div className="w-full h-[8rem] rounded-md overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h2 className="font-bold text-xl">{product.name}</h2>
          <p className="mt-2 text-xs text-gray-600">{product.description}</p>
          <p className="mt-2 text-lg font-bold text-blue-500">{product.price}</p>
        </div>
        {/* Product tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs bg-green-100 text-green-500 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Newproduct
