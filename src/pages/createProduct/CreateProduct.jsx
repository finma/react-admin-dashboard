import React from "react";

export default function CreateProduct() {
  return (
    <div className="p-5 text-gray-700 space-y-4">
      <h1 className="text-3xl font-semibold">Create New Product</h1>
      <form className="w-full flex flex-col ">
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
          <label className="font-semibold text-gray-400">Image</label>
          <input type="file" />
        </div>
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
          <label className="font-semibold text-gray-400">Product Name</label>
          <input
            type="text"
            placeholder="Apple Airpods"
            className="border border-gray-300 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
          <label className="font-semibold text-gray-400">Stock</label>
          <input
            type="text"
            placeholder="123"
            className="border border-gray-300 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
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
        <button className="w-1/5 px-10 py-2 uppercase rounded-md bg-blue-600 hover:bg-blue-700 text-white mt-5">
          Create Product
        </button>
      </form>
    </div>
  );
}
