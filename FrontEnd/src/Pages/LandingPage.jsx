import React from 'react'
import apiClient from '../Components/SpotifyAuth'

export default function LandingPage() {
    const [userImage,setUserImage] = React.useState('')
    React.useEffect(()=>{
        apiClient.get("me")
            .then(res => setUserImage(res.data.images[0].url))
    },[])

    return (
        <div className='text-2xl w-screen flex flex-col items-center justify-center'>
            <h1>LandingPage for Spottifier Logger</h1>
            <h1>USER IMAGE :</h1>
            <img src={userImage} alt=""  className="flex items-center justify-center h-[500px] w-[500px]"/>
        </div>
    )
}
