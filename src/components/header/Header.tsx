import React from "react"
import HeaderNavbar from "./HeaderNavbar"


const Header = () => {
  return(
    <div className="fixed flex justify-between px-8 w-screen h-16 bg-white items-center border-b border-gray-300">
      <h1 className="font-bold text-2xl">OOSORA</h1>
      <HeaderNavbar/>
    </div>
  )
}

export default Header