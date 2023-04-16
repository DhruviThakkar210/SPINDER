import React from "react";
import logoIcon from "../Assets/images/logoAsset 1-8 1.png"
import { BsSpotify } from 'react-icons/bs';
import { Link } from "react-router-dom"
import bgPhoto from "../Assets/images/Login SignUp PageAssest.png"
import { loginEndpointURL } from "../Components/SpotifyAuth";

// const client_id = "e2df6d5c04ba4d00b805b7403407979c"
// const client_secret = "8f0b72ea56104982808262ff8635b839"

export default function Login(){

    //for accessing spotify tracks and songs on it (user independent / no auth reqd)
    // const [spotifyAccessToken , setSpotifyAccessToken] = React.useState('')
    // React.useEffect(() => {
    //     fetch("https://accounts.spotify.com/api/token" , {
    //         method: "POST" ,
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded"
    //         },
    //         body: "grant_type=client_credentials&client_id=" + client_id + "&client_secret=" + client_secret
    //     })
    //     .then(res => res.json())
    //     .then(data => setSpotifyAccessToken(data.access_token))
    // },[])


    return (
        <div className="bg-gray-300 overflow-hidden">
        <div className="w-screen min-h-screen my-4 mx-8 flex relative ">
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
                    <h1 className="text-4xl font-[800] text-[#342B4A]">Get Started</h1>
                    <p className="mt-3 text-lg font-medium text-[#6B7280]">Create your account.</p>
                    <div className="mt-8 flex flex-col">
                        <a href={loginEndpointURL}>
                            <button className= "text-white px-6 py-3 bg-[#1ED760] font-[500] cursor-pointer rounded-full hover:bg-green-500">
                                <BsSpotify className=" h-[20px] inline-block mr-4" /> 
                                <span className="font-bold leading-tight">Log in with Spotify</span>
                            </button>
                        </a>
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
