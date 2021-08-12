import { AddBox } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";

import { Chart } from "../../components";
import { productData } from "../../dummyData";

export default function Product() {
  return (
    <div className="p-5 text-gray-700">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold">Edit Product</h2>
        <Link to="/create-product">
          <button className="px-3 py-1 text-white bg-green-500 rounded-md flex items-center space-x-2 hover:bg-green-600 uppercase text-sm">
            <AddBox /> <span>Create</span>
          </button>
        </Link>
      </div>
      <div className="flex space-x-5 mt-5">
        <div className="w-3/5 ">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="rounded-md shadow-md w-2/5 p-5">
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="product"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="ml-4 text-base font-semibold">Apple Airpods</span>
          </div>
          <div className="flex flex-col mt-5">
            <div className="flex justify-between w-1/2">
              <span className="font-semibold">id:</span>
              <span>123</span>
            </div>
            <div className="flex justify-between w-1/2">
              <span className="font-semibold">sales:</span>
              <span>5362</span>
            </div>
            <div className="flex justify-between w-1/2">
              <span className="font-semibold">active:</span>
              <span>yes</span>
            </div>
            <div className="flex justify-between w-1/2">
              <span className="font-semibold">in stock:</span>
              <span>no</span>
            </div>
          </div>
        </div>
      </div>
      <form className="flex p-5 rounded-md shadow-md mt-8">
        <div className="w-1/2 flex flex-col space-y-3 mt-5">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-400">Product Name</label>
            <input
              type="text"
              placeholder="Apple Airpods"
              className="border-b border-gray-300 outline-none p-2"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label className="font-semibold text-gray-400">In Stock</label>
            <select
              className="border border-gray-300 outline-none p-2 rounded-md"
              name="inStock"
              id="inStock"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex flex-col space-y-3">
            <label className="font-semibold text-gray-400">Active</label>
            <select
              className="border border-gray-300 outline-none p-2 rounded-md"
              name="active"
              id="active"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="w-1/2 flex flex-col space-y-40">
          <div className="flex justify-center items-center space-x-5">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="preview"
              className="w-48 h-48 object-cover rounded-md"
            />
            <label htmlFor="file" className="cursor-pointer">
              <Publish fontSize="large" color="primary" />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
          <button className="px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 w-1/3 m-auto uppercase text-sm">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
