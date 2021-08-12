import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import MenuItem from "./MenuItem";

export default function SidebarMenu() {
  const dashboardMenu = [
    { title: "Home", icon: <LineStyle />, path: "/" },
    { title: "Analytics", icon: <Timeline />, path: "#" },
    { title: "Sales", icon: <TrendingUp />, path: "#" },
  ];

  const quickMenu = [
    { title: "Users", icon: <PermIdentity />, path: "/users" },
    { title: "Products", icon: <Storefront />, path: "/products" },
    { title: "Transactions", icon: <AttachMoney />, path: "#" },
    { title: "Reports", icon: <BarChart />, path: "#" },
  ];

  const notificationsMenu = [
    { title: "Mail", icon: <MailOutline />, path: "#" },
    { title: "Feedback", icon: <DynamicFeed />, path: "#" },
    { title: "Messages", icon: <ChatBubbleOutline />, path: "#" },
  ];

  const staffMenu = [
    { title: "Manage", icon: <WorkOutline />, path: "#" },
    { title: "Analytics", icon: <Timeline />, path: "#" },
    { title: "Reports", icon: <Report />, path: "#" },
  ];

  return (
    <div className="p-5 text-gray-500">
      <MenuItem title="Dashboard" menuItems={dashboardMenu} />
      <MenuItem title="Quick Menu" menuItems={quickMenu} />
      <MenuItem title="Notifications" menuItems={notificationsMenu} />
      <MenuItem title="Staff" menuItems={staffMenu} />
    </div>
  );
}
