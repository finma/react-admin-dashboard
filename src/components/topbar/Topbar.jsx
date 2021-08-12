import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className=" h-14 w-full bg-white sticky top-0 z-50">
      <div className="h-full flex justify-between items-center p-5">
        <div>
          <span className="text-4xl text-indigo-900 font-bold cursor-pointer">
            finmaadmin
          </span>
        </div>
        <div className="flex items-center text-gray-700">
          <div className="relative cursor-pointer mr-3">
            <NotificationsNone />
            <span className="flex justify-center items-center text-xs w-3 h-3 absolute -top-1 right-0 bg-red-700 text-white rounded-full">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-3">
            <Language />
            <span className="flex justify-center items-center text-xs w-3 h-3 absolute -top-1 right-0 bg-red-700 text-white rounded-full">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-3">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
