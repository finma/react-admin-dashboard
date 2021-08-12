import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="w-full flex space-x-5 mb-5 justify-between text-gray-700">
      <div className="flex-1 p-5 rounded-md cursor-pointer shadow-md">
        <span className="text-xl font-medium">Revanue</span>
        <div className="my-2 flex items-center">
          <span className="text-xl font-semibold">Rp. 53.073</span>
          <span className="flex text-sm ml-5 items-center ">
            -11.321 <ArrowDownward style={{ fontSize: "15px", color: "red" }} />
          </span>
        </div>
        <span className=" text-gray-500">Compared to last month</span>
      </div>
      <div className="flex-1 p-5 rounded-md cursor-pointer shadow-md">
        <span className="text-xl font-medium">Sales</span>
        <div className="my-2 flex items-center">
          <span className="text-xl font-semibold">Rp. 51.973</span>
          <span className="flex text-sm ml-5 items-center ">
            -1.321 <ArrowDownward style={{ fontSize: "15px", color: "red" }} />
          </span>
        </div>
        <span className="text-base text-gray-500">Compared to last month</span>
      </div>
      <div className="flex-1 p-5 rounded-md cursor-pointer shadow-md">
        <span className="text-xl font-medium">Cost</span>
        <div className="my-2 flex items-center">
          <span className="text-xl font-semibold">Rp. 90.003</span>
          <span className="flex text-sm ml-5 items-center ">
            +7.321 <ArrowUpward style={{ fontSize: "15px", color: "green" }} />
          </span>
        </div>
        <span className="text-base text-gray-500">Compared to last month</span>
      </div>
    </div>
  );
}
