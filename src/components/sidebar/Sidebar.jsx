import SidebarMenu from "./sidebarmenu/SidebarMenu";

export default function Sidebar() {
  return (
    <div
      className="w-1/5 bg-gray-50 sticky top-14 "
      style={{ height: "calc(100vh - 56px)" }}
    >
      <SidebarMenu />
    </div>
  );
}
