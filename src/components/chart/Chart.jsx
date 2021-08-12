import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data, title, dataKey, grid }) {
  return (
    <div className="shadow-md rounded-md p-5">
      <h3 className="font-semibold text-xl text-gray-700 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#4F46E5" />
          <YAxis stroke="#4F46E5" />
          <Line type="monotone" dataKey={dataKey} stroke="#4F46E5" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#C7D2FE" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
