import { useState } from "react";
import { Node } from "../models/Node";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
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
          <Link to={"/persons"} state={{ person: parent }}>
            <span>{parent.name}</span>
          </Link>
          <BsIcons.BsChevronDown
            className="toggle-btn"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="sidebar-content">
          {parent.children.map((child, index) => (
            <SidebarItem key={index} parent={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-item">
        <div className="sidebar-title">
          <Link to={"/persons"} state={{ person: parent }}>
            <span>{parent.name}</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default SidebarItem;
