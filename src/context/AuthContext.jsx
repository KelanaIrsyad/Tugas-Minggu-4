import axios from 'axios';
import React, { createContext, useContext } from 'react'
import { useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

const AuthProvide = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = async(username, password) => {
        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login',{
                username,
                password})
                setUser(response.data)
                alert("Selamat Kamu Berhasil Login")
                localStorage.setItem("user", JSON.stringify(response.data))
        } catch (error) {
            console.error("Login failed: " , error)
            alert("Username atau Password salah")
            window.location.href = "/"
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user")
        
    }

    return (
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
      )
}



export default AuthProvide