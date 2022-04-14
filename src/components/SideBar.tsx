import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import { IconContext } from "react-icons";
import "./SideBar.css";
import Tree from "./tree/Tree";

function SideBar() {
    const [sidebar, setSidebar] = useState<boolean>(false);
    const [node, setNode] = useState([]);

    const showSidebar = () => setSidebar(!sidebar);
    
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
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
                      </li> 
                      {/* <Tree data={node}/>           */}
            {/* {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
