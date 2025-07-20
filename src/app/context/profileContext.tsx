'use client'
import { createContext, useContext } from "react";
import { ProfileContextType, ProfileState } from "../utils/types";
import { profileReducer } from "../reducer/profile";
import React from "react";
import { getUserProfile } from "../utils/api";

const ProfileContext = createContext<ProfileContextType|null>(null);

const initialProfileState:ProfileState = {
 profile:null,
 address:null,
  loading: false,
    error: null,
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  
    const [profileState, profileDispatch] = React.useReducer(profileReducer, initialProfileState);


    React.useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = getUserProfile();
                const data = await response;
                profileDispatch({ type: 'FETCH_PROFILE', payload: data });
            } catch (error) {
                let errorMessage = 'An unknown error occurred';
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                profileDispatch({ type: 'FETCH_PROFILE_ERROR', payload: errorMessage });
            }
        }

        fetchProfile();
    }, []);
    return (
    <ProfileContext.Provider value={{profileState,profileDispatch}}>
      {children}
    </ProfileContext.Provider>
  );
}
export const useProfile = () => {
     const context =  useContext(ProfileContext);
    if (!context) {
      throw new Error('useProfile must be used within a ProfileProvider');
    }
    return context;
}