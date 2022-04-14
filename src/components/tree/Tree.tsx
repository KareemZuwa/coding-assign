import { useState, useEffect, Key } from "react";
import { Node } from '../../models/Node';
import * as FaIcons from "react-icons/fa";

interface TreeProps {
  data: Node,
}

const Tree = ({ data }: TreeProps) => {
  console.log(data.id)

  return (
    <>
      <div>{data.name}</div>
      
      {/* {data.map((index: Key | null | undefined, item: { name: string | undefined; }) => {
        return (
          <li key={index} className={item.name}>{ item.name}</li>
        )
      })} */}
    
            {/* <FaIcons.FaCaretRight /> */}
  
      
    </>
  );
};


export default Tree;
