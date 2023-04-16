//responsiveness - Done ✅

import React from 'react';
import apiClient from '../Components/SpotifyAuth';
// import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


export default function LandingPage() {

  const [userProfile, setUserProfile] = React.useState({
    name: '',
    profileImage: '',
  });
  const [usersTopArtists, setUsersTopArtists] = React.useState([]);
  const [usersFollowedArtists, setUsersFollowedArtists] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      apiClient.get('me'), // User Info
      apiClient.get('me/following?type=artist&limit=20&locale=en-GB,en;q=0.7'), // Followed Artists
      apiClient.get('me/top/artists?limit=20&offset=20'), // Top Artists
    ])
        .then(([userData, followedArtistsData, topArtistsData]) => {
        setUserProfile({
            name: userData.data.display_name,
            profileImage: userData.data.images[0].url,
        });
        setUsersFollowedArtists(
            followedArtistsData.data.artists.items.map((val) => val.name)
        );
        setUsersTopArtists(topArtistsData.data.items.map((val) => val.name));
        });
  }, []);

  return (
    <div className="bg-[#1CDF63] p-4 text-2xl font-[500] leading-10 h-full w-full flex flex-col items-center justify-center">
        <pre className='text-sm'>I Finally Did It Giezz😭😭😭</pre>
        <div className="flex flex-col items-center justify-center mb-10">
            <img
            src={userProfile.profileImage}
            alt={userProfile.name}
            className="w-60 h-60 rounded-full object-cover mb-5"
            />
            <div className='flex gap-5 justify-center items-center'>
                <h1 className="text-3xl">{userProfile.name}</h1>
                <button 
                    className="bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:scale-110 transition duration-300 ease-in"
                    onClick={() => {
                        localStorage.clear();
                        // return <Redirect to="/home"/>
                        <Navigate replace to="/home" />
                      }}
                >
                    Sign Out
                </button>
            </div>
        </div>
        <div className="flex flex-col gap-10 w-full md:w-2/3">
            <div className="bg-gray-300 rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-medium mb-4"> Your Top Artists</h4>
                <ul className="list-disc ml-8">
                    {usersTopArtists.map((name) => (
                    <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
            <div className="bg-gray-300 rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-medium mb-4">Your Followed Artists</h4>
                <ul className="list-disc mx-8">
                    {usersFollowedArtists.map((name) => (
                    <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>

  );
}
