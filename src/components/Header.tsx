import React from 'react'
import './Header.css'

function Header() {
  let title:string = "Coding Assignment Kareem"

  return (
      <div className="header">
          <h1 className="header-title">{title}</h1>
    </div>
  )
}

export default Header