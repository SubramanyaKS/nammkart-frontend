// proifle section
'use client'
import { useProfile } from '@/app/context/profileContext';
import React from 'react';
// import ProfileDetails from './profiledetails';
import defaultProfileImage from '../../assets/user.png';
import Image from 'next/image';


const Page = () => {
  const {profileState}= useProfile();
  const {profile

  } = profileState;

  return (
      // <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
       <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
             <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
               <div className="flex flex-col items-center text-center">
                 <Image
                   src={profile?.profileUrl || defaultProfileImage} // Replace with dynamic user image or fallback
                   alt="Profile Picture"
                   width={100}
                   height={100}
                   className="rounded-full object-cover border-4 border-blue-500"
                 />
                 <h2 className="mt-4 text-xl font-semibold text-gray-800">{profile?.username}</h2>
                 <p className="text-sm text-gray-500">{profile?.email}</p>
                 <p className="text-sm text-gray-500">{profile?.phoneNumber}</p>
                 <p className="mt-1 text-gray-600 text-sm">{profile?.role} at NammKart.</p>
                 <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                   Edit Profile
                 </button>
               </div>
       
               <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                 <div>
                   <h3 className="text-lg font-bold text-gray-800">24</h3>
                   <p className="text-sm text-gray-500">Orders</p>
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-gray-800">12</h3>
                   <p className="text-sm text-gray-500">Wishlist</p>
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-gray-800">4.8</h3>
                   <p className="text-sm text-gray-500">Rating</p>
                 </div>
               </div>
             </div>
           </div>
      // </div>
  )
}

export default Page