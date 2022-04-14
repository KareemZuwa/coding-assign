import { useEffect, useState } from "react";
import { useRecoilState } from 'recoil'
import { Node } from "../models/Node";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import * as FaIcons from "react-icons/fa";
import "./SideBarTwo.css";
import Tree from "./tree/Tree";
import About from "../pages/About";
import atomPersons from '../atoms/Persons'

function SideBarTwo() {
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

  console.log(node.map((item) => item.children));

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {node.map((item) =>
          item.children.map((tree: Node, index: number) => (
            <li key={index} className="nav-text">
              <Link to={'/about'} state={{ person: tree }}>
                <div>
                  <FaIcons.FaCaretRight />
                </div>
                <div>{tree.name}</div>
              </Link>
            </li>
          ))
        )}

        {/* {node.map((index, tree) => (
          
          // <Tree key={ index} data={tree}/>
        ))} */}
        {/* <Tree data={ node}/> */}
        {/* {SideBarData.map((item, index) => {
        return (
          <li key={index} className={item.className}>
            <Link to={item.path}>
            <div><FaIcons.FaCaretRight /></div>
            <div>{item.title}</div>
            </Link>
          </li>
        )
       
      })} */}
      </ul>
    </div>
  );
}

export default SideBarTwo;
