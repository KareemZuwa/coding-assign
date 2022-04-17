import { useState } from "react";
import { Node } from "../models/Node";
import * as BsIcons from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./SidebarItem.css";

interface SidebarItemProps {
  parent: Node;
}

function SidebarItem({ parent }: SidebarItemProps) {
  const [open, setOpen] = useState<boolean>(false);

  if (parent.children.length > 0) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <NavLink
            className="NavLink"
            to={"/persons/" + parent.id}
            state={{ person: parent }}
          >
            <span>{parent.name}</span>
          </NavLink>
          <BsIcons.BsChevronDown
            className="toggle-btn"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="sidebar-content">
          {parent.children.map((parent, index) => (
            <SidebarItem key={index} parent={parent} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-item">
        <div className="sidebar-title">
          <NavLink
            className="NavLink"
            to={"/persons/" + parent.id}
            state={{ person: parent }}
          >
            <span>{parent.name}</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SidebarItem;
