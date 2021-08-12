import { useHistory, useLocation } from "react-router-dom";

export default function MenuItem({ title, menuItems }) {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="mb-3">
      <h3 className="text-base font-semibold text-gray-400">{title}</h3>
      <ul className="px-1">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className={`p-1 flex items-center cursor-pointer hover:bg-gray-200 rounded-md 
            active:bg-gray-200 ${
              location.pathname === item.path && "bg-gray-200"
            }`}
            onClick={() => history.push(item.path)}
          >
            {item.icon}
            <span className="ml-2 text-base font-medium">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
