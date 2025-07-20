import axios from "axios";
import React from "react";
import { backendurl } from "../utils/constant";
import { useProfile } from "../context/profileContext";

export const useProfileData = () => {
  const [profile, setProfile] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const {profileDispatch} = useProfile();

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response  = await axios.get(`${backendurl}/api/users/auth/user/email`, {
            headers: {
              'withCredentials': 'true',
              'Content-Type': 'application/json',
            }
          });
          profileDispatch({ type: 'FETCH_PROFILE', payload: response.data });
        setProfile(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { profile, loading, error };
}