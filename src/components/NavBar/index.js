import React from "react"
import "../NavBar/style.css"
import { Link } from "react-router-dom"
import { NavHeader, SideNav } from "./components"

export const NavBar = () => {
  return (
    <div>
      <NavHeader />
      <SideNav />
    </div>
  )
}
