//TODO - Add Responsiveness

import logoIcon from "../Assets/images/logoAsset 1-8 1.png"
import bgPhoto from '../Assets/images/main pageAsset 2-8 1.png'
import { BsSpotify } from 'react-icons/bs';
import { Link } from "react-router-dom"
// import MyMusic from "../Assets/m.usic/真夜_-のドア〜stay-with-me-night-tempo-showa-groove-mix-svfromnet.com.mp3"
import MyMusic from "../Assets/m.usic/fly-day-chinatown-mewna-remix-svfromnet.com (1).mp3"
// import MyMusic from "../Assets/m.usic/フライディ・チャイナタウン-泰葉-official-lyric-video-svfromnet.com.mp3"



export default function Home(){
    return (
        //todo curson pointer
        //todo login signup ke icons
        <div className="w-full min-h-screen bg-[#342B4A] ">
            <nav className="flex justify-between items-center py-4 px-8 bg-[#342B4A]">
                <Link to="/">
                    <div className="flex items-center bg-[#342B4A] cursor-pointer">
                        <img src={logoIcon} alt="" className="w-auto mr-4 h-[60px] bg-transparent" />
                        <span className="font-bold text-white text-[30px] bg-transparent">SPINDER</span>
                    </div>                
                </Link>
                <div className="flex items-center font-bold text-[20px] ">
                    <Link to="/login">
                        <button className= "text-white px-7 py-2 bg-[#342B4A] cursor-pointer hover:scale-110 transition duration-300 ease-in">
                            <BsSpotify className="inline-block mr-2" /> 
                            Log in
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-[#D93EBE] text-white px-4 py-2 rounded-full cursor-pointer hover:scale-110 transition duration-300 ease-in">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </nav>
          <div className="text-center py-20 bg-transparent animate-pulse">
                <div className="text-[58px] font-[600] text-white text-center leading-tight w-full max-w-2xl absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-[150px] bg-transparent">
                    Discover your perfect match based on the music you love
                </div>
            </div>
            <img src={bgPhoto} alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 bottom-0 w-465 h-[400px] bg-transparent" />
        </div>
    )
}