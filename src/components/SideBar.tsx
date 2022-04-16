import { useEffect, useState } from "react";
import { Node } from "../models/Node";
import SidebarItem from './SidebarItem'
import "./Sidebar.css";

function SideBar() {
    const [node, setNode] = useState<Node[]>([]);

    useEffect(() => {
        async function sendRequest() {
          const response = await fetch(
            "https://61f5037b62f1e300173c3f8d.mockapi.io/node"
          );
          const data = await response.json();
          setNode(data);
        }
        sendRequest();
    }, [setNode]);

  return (
    <div className="sidebar-wrapper">
          <div className="sidebar">
              {node.map(item => 
                  item.children.map((parent: Node, index: number) => <SidebarItem key={index} parent={parent} />))}
      </div>
    </div>
  );
}

export default SideBar;
