import React from 'react'
import { BsSpotify } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import logoIcon from "../Assets/images/logo.png"

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-2 sm:px-8 bg-[#342B4A]">
            <Link to="/">
                <div className="flex items-center gap-2 text-xl sm:gap-4 bg-[#342B4A] cursor-pointer">
                    <img src={logoIcon} alt="" className="w-10 sm:w-auto bg-transparent" />
                    <span className="font-bold text-white bg-transparent">SPINDER</span>
                </div>
            </Link>
            <div className="flex items-center font-bold text-sm sm:text-lg gap-3 ">
                <Link to="/login">
                    <button className="text-white sm:px-4 py-2 bg-[#342B4A] cursor-pointer hover:scale-110 transition duration-200 ease-in">
                        <BsSpotify className="inline-block mr-2" />
                        Log in
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="bg-[#D93EBE] text-white px-[.5rem] sm:px-4 py-2 rounded-full cursor-pointer hover:scale-110 transition duration-200 ease-in">
                        Sign Up
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar