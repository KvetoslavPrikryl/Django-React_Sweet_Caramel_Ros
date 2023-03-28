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
      <h2 className="login-h2">Přihlášení</h2>
      {user ?
      <div>
        <h2 className="login-h2">Výtej {user.username}</h2>
        <Link to="/"><button className="btn">Hlavní stránka</button></Link>
      </div>
       : <form className="form-login" onSubmit={loginUser}>
       <input 
         type="text" 
         name='username' 
         placeholder='Jméno'
       /><br/>
       <input 
         type="password" 
         name="password" 
         placeholder='Heslo' 
       /><br/>
       <input className="btn" type="submit" value="Přihlásit" />
   </form>}
    </div>
  )
}

export default LogIn