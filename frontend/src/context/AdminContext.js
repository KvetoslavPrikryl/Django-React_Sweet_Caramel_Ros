import React, {useState, useEffect} from 'react'
import jwt_decode from "jwt-decode"

const AdminContext =  React.createContext()
export default AdminContext

export const AuthProvider = ({children, }) => {
    let [user, setUser] = useState(localStorage.getItem("authToken") ? jwt_decode(localStorage.getItem("authToken")) : null)
    let [authToken, setAuthToken] = useState(localStorage.getItem("authToken") ? JSON.parse(localStorage.getItem("authToken")) : null)
   

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch("/api/route/token/", {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"username" : e.target.username.value, "password": e.target.password.value})
        })
        let data = await response.json()
        if (response.status === 200){
          setAuthToken(data)
          setUser(jwt_decode(data.access))
          localStorage.setItem("authToken" , JSON.stringify(data))
        }else{
          alert("Nepodařilo se přihlásit! Nesprávné jméno nebo heslo!")
        }
    }

    let logoutUser = () => {
        setUser(null)
        setAuthToken(null)
        localStorage.removeItem("authToken")
    }

    const contextData = {
        loginUser: loginUser,
        user: user,
        logoutUser: logoutUser
    }

    return(
        <AdminContext.Provider value={contextData}>
            {children}
        </AdminContext.Provider>
    )
}