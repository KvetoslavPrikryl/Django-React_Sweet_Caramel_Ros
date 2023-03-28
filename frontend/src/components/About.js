import React, {useEffect, useState, useContext} from 'react'
import "./AboutStyles.css"
import { Link } from 'react-router-dom'
import AdminContext from '../context/AdminContext'

const About = () => {

  let [about, setAbout] = useState([])
  let {user, logoutUser} = useContext(AdminContext)

  useEffect( () => {
    getAbout()
  }, [])

  let getAbout = async () => {
    let response = await fetch("/api/")
    let data = await response.json()
    setAbout(data)
  }

  return (
    <div className='about-container'>
        <div className='about-cont'>
          {user ? 
            <form onSubmit={logoutUser}>
              <input className='logout' type="submit" value="Odhlásit" />
            </form>
          : <Link to="/prihlasit" className='login'>Přihlásit</Link> }
          
          {about.map(( data) => {
            return <div className='about-text' key={data.id}>
              <h2>{data.name}</h2>
              <p>{data.body}</p>
            </div>
          })}
        </div>
    </div>
  )
}

export default About