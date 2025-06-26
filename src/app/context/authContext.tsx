'use client'
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { AuthContextType, AuthState } from "../utils/types";
import { authReducer } from "../reducer/auth";


const initialState:AuthState = {
  isAuthenticated: false,
  user: null,
  token:'',
};


const AuthContext = createContext<AuthContextType|null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }>=({ children })=> {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Read from localStorage or cookie
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () =>{
   const context =  useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}