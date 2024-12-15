import {useDropzone} from 'react-dropzone';
import  {useCallback, useState} from 'react'
const ListProduct = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles:any) => {
        const file = acceptedFiles[0];
        setSelectedImage(URL.createObjectURL(file));
      }, [])


    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, multiple: false})
  return (
    <div className="p-10 w-full">
      <h2 className="text-3xl font-wix text-blue-600 font-semibold">List Product</h2>
      <div className="mt-4  md:w-[50%] ">
        <form className="max-w-sm">
          <div className="mb-5">
            <label
              htmlFor="product_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="product_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="product name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="product_quantity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Quantity
            </label>
            <input
              type="text"
              id="product_id"
              placeholder="input quantity of product"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="product_quantity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price Per Product
            </label>
            <input
              type="text"
              id="product_price"
              placeholder="input quantity of product"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="product_quantity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Category
            </label>
            <input
              type="text"
              id="product_category"
              placeholder="input quantity of product"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className="flex flex-col items-center p-4 border-2 border-dashed rounded-md border-gray-300">
            <div
                {...getRootProps()}
                className={`w-full h-48 flex items-center justify-center cursor-pointer ${
                isDragActive ? "bg-gray-200" : "bg-gray-100"
                }`}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                <p className="text-gray-600">Drop the image here...</p>
                ) : (
                <p className="text-gray-600 text-sm">
                    Drag & drop an image here, or click to select one
                </p>
                )}
            </div>

            {/* Preview Area */}
            {selectedImage && (
                <div className="mt-4">
                <p className="text-gray-700">Preview:</p>
                <img
                    src={selectedImage}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded-md"
                />
                </div>
            )}
         </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full mt-2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            list product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListProduct;
