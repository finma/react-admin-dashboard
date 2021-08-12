import { FeaturedInfo, Chart, WidgetSm, WidgetLg } from "../../components";
import { userData } from "../../dummyData";

export default function Home() {
  return (
    <div className="m-5 p-5">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <div className="flex my-5 space-x-8">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
