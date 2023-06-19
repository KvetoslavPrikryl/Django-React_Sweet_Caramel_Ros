import AdminContext from "../context/AdminContext"
import React, {useContext} from "react"
import { Link } from "react-router-dom"
import "./LogInStyles.css"


const LogIn = () => {

  let {loginUser} = useContext(AdminContext)
  let {user} = useContext(AdminContext)
  
  return (
    <div className="container">
      <Link to="/" className="btn-back">Hlavní stánka</Link>
      <h2 className="login-h2" id="title">Přihlášení</h2>
      {user ?
      <div>
        <h2 className="login-h2" id="welcome_title">Výtej {user.username}</h2>
        <Link to="/"><button className="btn" id="main_page">Hlavní stránka</button></Link>
      </div>
       : <form className="form-login" onSubmit={loginUser}>
       <input 
         type="text" 
         name='username' 
         placeholder='Jméno'
         id="user-name"
       /><br/>
       <input 
         type="password" 
         name="password" 
         placeholder='Heslo' 
         id="password"
       /><br/>
       <input 
        className="btn" 
        type="submit" 
        value="Přihlásit" 
        id="login-button"
        />
   </form>}
    </div>
  )
}

export default LogIn