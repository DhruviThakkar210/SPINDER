import logoIcon from "../Assets/images/logoAsset 1-8 1.png"
import { BsSpotify } from 'react-icons/bs';
import { Link } from "react-router-dom"
import bgPhoto from "../Assets/images/Login SignUp PageAssest.png"


export default function Signup(){
    return (
        <div className="bg-gray-300">
        <div className="w-full min-h-screen my-4 mx-8 flex relative">
           <div className="w-1/2 h-full">   {/* LEFT Side*/}
                <div>
                    <Link to="/">
                        <div className="flex items-center cursor-pointer">
                            <img src={logoIcon} alt="" className="w-auto mr-4 h-[60px] bg-transparent" />
                            <span className="font-bold text-[#342B4A] text-[30px] bg-transparent">SPINDER</span>
                        </div>                
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center mt-[200px]">
                    <h1 className="text-4xl font-[800] text-[#342B4A]">Welcome Back !</h1>
                    <p className="mt-3 text-lg font-medium text-[#6B7280]">Login To Continue</p>
                    <div className="mt-8 flex flex-col space-y-2">
                        <button className= "text-white px-8 py-3 bg-[#1ED760] font-[500] cursor-pointer rounded-full hover:bg-green-500">
                            <BsSpotify className=" h-[20px] inline-block mr-2" /> 
                            <span className="font-bold leading-tight">Continue with Spotify</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-screen relative"> {/* RIGHT Side*/}
                <img src={bgPhoto} alt="" className="absolute top-0 left-0 h-full w-[670px] pb-[2rem] rounded-md" />
            </div>
        </div>
        </div>
    )
}