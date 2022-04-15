import { useEffect, useState } from "react";
import { Node } from "../models/Node";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./SideBarTwo.css";

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
          item.children.map((tree: Node, index: number) => {
            return (
            <li key={index} className="nav-text">
              <Link to={"/persons"} state={{ person: tree }}>
                <div>
                  <FaIcons.FaCaretRight />
                </div>
                  <div>{tree.name}</div>
                </Link>
                <ul className="subitem-wrapper">
              {tree.children.map((subitem, index) => {
                return (
                  <li key={index} className="nav-text-child">
                    <Link to={"/persons"} state={{ person: subitem }}>
                      <div>{subitem.name}</div>
                    </Link>
                    <ul className="second-subitem-wrapper">
                      {subitem.children.map((subitemtwo, index) => {
                        return (
                          <li key={index} className="nav-text-second-child">
                            <Link to={"/persons"} state={{ person: subitemtwo }}>
                              <div>{subitemtwo.name}</div>
                            </Link>
                            <ul className="second-subitem-wrapper">
                      {subitemtwo.children.map((subitemthree, index) => {
                        return (
                          <li key={index} className="nav-text-second-child">
                            <Link to={"/persons"} state={{ person: subitemthree }}>
                              <div>{subitemthree.name}</div>
                            </Link>
                            <ul className="second-subitem-wrapper">
                      {subitemthree.children.map((subitemfour, index) => {
                        return (
                          <li key={index} className="nav-text-second-child">
                            <Link to={"/persons"} state={{ person: subitemfour }}>
                              <div>{subitemfour.name}</div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                          </li>
                        );
                      })}
                    </ul>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
              </ul>
            </li>
          )})
        )}
      </ul>
    </div>
  );
}

export default SideBarTwo;
