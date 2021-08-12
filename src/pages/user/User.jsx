import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  AddBox,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="p-5 text-gray-700">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold">Edit User</h2>
        <Link to="/create-user">
          <button className="px-3 py-1 text-white bg-green-500 rounded-md flex items-center space-x-2 hover:bg-green-600 uppercase text-sm">
            <AddBox /> <span>Create</span>
          </button>
        </Link>
      </div>
      <div className="flex justify-between space-x-5 mt-5">
        <div className="w-1/3 shadow-md rounded-md p-5">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover mr-2"
            />
            <div className="flex flex-col -space-y-1">
              <span className="font-semibold">Anna Lens</span>
              <span className="font-light">Software Engineer</span>
            </div>
          </div>
          <div className="flex flex-col space-y-6 mt-5">
            <span className="text-base font-semibold text-gray-500">
              Account Details
            </span>
            <div className="flex items-center space-x-3">
              <PermIdentity />
              <span>annalens24</span>
            </div>
            <div className="flex items-center space-x-3">
              <CalendarToday />
              <span>10.8.1998</span>
            </div>
            <span className="text-base font-semibold text-gray-500">
              Contacts Details
            </span>
            <div className="flex items-center space-x-3">
              <PhoneAndroid />
              <span>+62 89123456789</span>
            </div>
            <div className="flex items-center space-x-3">
              <MailOutline />
              <span>anna@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <LocationSearching />
              <span>Jakarta | Indonesia</span>
            </div>
          </div>
        </div>
        <div className="w-2/3 shadow-md rounded-md p-5">
          <h3 className="text-2xl font-semibold">Edit</h3>
          <form className="flex">
            <div className="w-1/2 flex flex-col space-y-2 mt-5">
              <div className="flex flex-col">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annalens24"
                  className="border-b border-gray-300 outline-none p-2"
                />
              </div>
              <div className="flex flex-col">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="Anna Lens"
                  className="border-b border-gray-300 outline-none p-2"
                />
              </div>
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="anna@gmail.com"
                  className="border-b border-gray-300 outline-none p-2"
                />
              </div>
              <div className="flex flex-col">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+6289123456789"
                  className="border-b border-gray-300 outline-none p-2"
                />
              </div>
              <div className="flex flex-col">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Jakarta | Indonesia"
                  className="border-b border-gray-300 outline-none p-2"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col space-y-40">
              <div className="flex justify-center items-center space-x-5">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="preview"
                  className="w-48 h-48 object-cover rounded-md"
                />
                <label htmlFor="file" className="cursor-pointer">
                  <Publish fontSize="large" color="primary" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 w-1/3 m-auto uppercase text-sm">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
