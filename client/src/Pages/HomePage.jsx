//TODO - Add Responsiveness
import bgPhoto from '../Assets/images/match.png'
import heart from '../Assets/images/love.svg'
import small_heart from '../Assets/images/small_heart.svg'
import Navbar from "../Components/Navbar";
// import MyMusic from "../Assets/m.usic/真夜_-のドア〜stay-with-me-night-tempo-showa-groove-mix-svfromnet.com.mp3"
// import MyMusic from "../Assets/m.usic/fly-day-chinatown-mewna-remix-svfromnet.com (1).mp3"
// import MyMusic from "../Assets/m.usic/フライディ・チャイナタウン-泰葉-official-lyric-video-svfromnet.com.mp3"



export default function Home() {
    return (
        //todo curson pointer
        //todo login signup ke icons
        <div className="min-h-screen h-screen bg-[#342B4A] ">
            <Navbar />

            <div className="w-full flex flex-col justify-center items-center gap-10 mt-10 sm:mt-3">
                <div className="w-3/5 animate-pulse text-4xl sm:text-5xl font-[600] text-white text-center leading-tight  bg-transparent flex flex-col gap-1 sm:gap-2 relative">
                    <span>Discover your perfect</span>
                    <span>match based on the</span>
                    <span>music you love</span>
                    <div className='absolute -bottom-10 left-36 hidden 2xl:inline-flex'>
                        <img src={heart} alt="" />
                    </div>
                    <div className='absolute bottom-5 left-28 hidden 2xl:inline-flex'>
                        <img src={small_heart} alt="" />
                    </div>
                    <div className='absolute -bottom-10 right-36 hidden 2xl:inline-flex rotate-[65deg]'>
                        <img src={heart} alt="" />
                    </div>
                    <div className='absolute bottom-5 right-28 hidden 2xl:inline-flex rotate-[65deg]'>
                        <img src={small_heart} alt="" />
                    </div>
                </div>
                <div className="w-2/4 sm:w-1/4 absolute bottom-0 bg-transparent">
                    <img src={bgPhoto} alt="" className="" />
                </div>
            </div>
        </div>
    )
}