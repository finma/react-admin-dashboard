import React from "react";

export default function CreateUser() {
  return (
    <div className="p-5 text-gray-700 space-y-4">
      <h1 className="text-3xl font-semibold">Create New User</h1>
      <form className="w-full flex flex-wrap">
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
          <label className="font-semibold text-gray-400">Username</label>
          <input
            type="text"
            placeholder="Jhon"
            className="border border-gray-300 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
          <label className="font-semibold text-gray-400">Full Name</label>
          <input
            type="text"
            placeholder="Jhon Smith"
            className="border border-gray-300 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
          <label className="font-semibold text-gray-400">Email</label>
          <input
            type="email"
            placeholder="jhon@gmail.com"
            className="border border-gray-300 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
          <label className="font-semibold text-gray-400">Password</label>
          <input
            type="password"
            placeholder="Jhon"
            className="border border-gray-300 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
          <label className="font-semibold text-gray-400">Phone</label>
          <input
            type="text"
            placeholder="+6289123456789"
            className="border border-gray-300 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
          <label className="font-semibold text-gray-400">Address</label>
          <input
            type="text"
            placeholder="Majalengka | Indonesia"
            className="border border-gray-300 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2 w-1/2 pr-5 mt-4">
          <label className="font-semibold text-gray-400">Gender</label>
          <div className="flex space-x-10">
            <div className="flex items-center space-x-2">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male" className="font-medium text-lg">
                Male
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female" className="font-medium text-lg">
                Female
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" name="gender" id="other" value="other" />
              <label for="other" className="font-medium text-lg">
                Other
              </label>
            </div>
          </div>
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
        <button className="px-10 py-2 uppercase rounded-md bg-blue-600 text-white mt-5">
          Create User
        </button>
      </form>
    </div>
  );
}
