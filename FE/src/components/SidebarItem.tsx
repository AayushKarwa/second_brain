import React, { ReactElement } from "react";

interface sidebarItemInterface {
  text: string;
  icon: ReactElement;
}
const SidebarItem = ({ text, icon }: sidebarItemInterface) => {
  return (
    <div className="flex gap-1 items-center font-semibold text-lg hover:bg-gray-200 cursor-pointer max-w-48 rounded-md pl-4 transition-all duration-200">
      <div className="p-2 ">{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default SidebarItem;
