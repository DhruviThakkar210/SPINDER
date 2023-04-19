//TODO - Add Responsiveness
import bgPhoto from '../Assets/images/match.png'
import Navbar from "../Components/Navbar";
// import MyMusic from "../Assets/m.usic/真夜_-のドア〜stay-with-me-night-tempo-showa-groove-mix-svfromnet.com.mp3"
// import MyMusic from "../Assets/m.usic/fly-day-chinatown-mewna-remix-svfromnet.com (1).mp3"
// import MyMusic from "../Assets/m.usic/フライディ・チャイナタウン-泰葉-official-lyric-video-svfromnet.com.mp3"



export default function Home() {
    return (
        //todo curson pointer
        //todo login signup ke icons
        <div className="min-h-screen bg-[#342B4A] ">
            <Navbar />

            <div className="w-full flex flex-col justify-center items-center gap-10 mt-8">
                <p className="w-3/5 animate-pulse text-4xl sm:text-5xl font-[600] text-white text-center leading-tight  bg-transparent">
                    Discover your perfect match based on the music you love
                </p>
                <div className="w-2/4 sm:w-1/4 bg-transparent">
                    <img src={bgPhoto} alt="" className="" />
                </div>
            </div>
        </div>
    )
}