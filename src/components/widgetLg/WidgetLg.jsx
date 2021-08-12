import "./style.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"btn " + type}>{type}</button>;
  };

  return (
    <div className="w-2/3 shadow-md p-5 text-gray-700">
      <span className="font-semibold text-xl  mb-4">Latest Transactions</span>
      <table className="table table-auto w-full border-separate">
        <tr className="">
          <th className="text-left">Customer</th>
          <th className="text-left">Date</th>
          <th className="text-left">Amount</th>
          <th className="text-left">Status</th>
        </tr>
        <tr className="mt-5">
          <td className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover mr-2"
            />
            <span className="text-base font-semibold">Lily Ana</span>
          </td>
          <td>1 Agustus 2021</td>
          <td>Rp. 152.897</td>
          <td>
            <Button type="Approve" />
          </td>
        </tr>
        <tr className="">
          <td className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover mr-2"
            />
            <span className="text-base font-semibold">Lily Ana</span>
          </td>
          <td>1 Agustus 2021</td>
          <td>Rp. 152.897</td>
          <td>
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="">
          <td className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover mr-2"
            />
            <span className="text-base font-semibold">Lily Ana</span>
          </td>
          <td>1 Agustus 2021</td>
          <td>Rp. 152.897</td>
          <td>
            <Button type="Approve" />
          </td>
        </tr>
        <tr className="">
          <td className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover mr-2"
            />
            <span className="text-base font-semibold">Lily Ana</span>
          </td>
          <td>1 Agustus 2021</td>
          <td>Rp. 152.897</td>
          <td>
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
