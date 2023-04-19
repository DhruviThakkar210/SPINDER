import logoIcon from "../Assets/images/logo.png"
import { BsSpotify } from 'react-icons/bs';
import { Link } from "react-router-dom"
import bgPhoto from "../Assets/images/signup.png"
import { loginEndpointURL } from "../Components/SpotifyAuth";


export default function Signup() {
    return (
        <div className="bg-gray-300">
            <div className="p-4 h-screen items-center sm:justify-normal sm:items-start sm:py-0 sm:pl-8 sm:pr-4 flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 sm:mt-4">   {/* LEFT Side*/}
                    <div>
                        <Link to="/">
                            <div className="flex items-center gap-2 text-xl sm:gap-4 cursor-pointer">
                                <img src={logoIcon} alt="" className="w-10 sm:w-auto bg-transparent" />
                                <span className="font-bold text-[#342B4A] bg-transparent">SPINDER</span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center my-8 sm:mt-[200px]">
                        <h1 className="text-4xl font-[800] text-[#342B4A]">Welcome Back !</h1>
                        <p className="mt-3 text-lg font-medium text-[#6B7280]">Login To Continue</p>
                        <div className="mt-8 flex flex-col">
                            <a href={loginEndpointURL}>
                                <button className="text-white px-6 py-3 bg-[#1ED760] font-[500] cursor-pointer rounded-full hover:bg-green-500">
                                    <BsSpotify className=" h-[20px] inline-block mr-4" />
                                    <span className="font-bold leading-tight">Continue With Spotify</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-screen relative hidden sm:inline-flex overflow-hidden"> {/* RIGHT Side desktop*/}
                    <img src={bgPhoto} alt="" className="absolute w-full top-4 left-0 h-[95%] rounded-md" />
                </div>
                <div className="sm:hidden w-[40%] pb-[2rem]"> {/* RIGHT Side mobile*/}
                    <img src={bgPhoto} alt="" className="rounded-md" />
                </div>
            </div>
        </div>
    )
}