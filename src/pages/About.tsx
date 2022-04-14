import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { Node } from "../models/Node";
import atomPersons from '../atoms/Persons'
import { Location } from 'history'

interface LocationState {
  person: any;
}


function About() {
  let location = useLocation();
  const { person } = location.state as LocationState;
  console.log(person.name)

  return (
    <div className="about">
      <h1>About</h1>
      <h2 key={person.id}>{person.name}</h2>
    </div>
  )
}

export default About