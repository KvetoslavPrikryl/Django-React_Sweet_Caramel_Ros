import {useContext, useState,} from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css"
import { FaBars, FaTimes } from "react-icons/fa";
import AdminContext from '../context/AdminContext';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  let {user} = useContext(AdminContext)


  return (
    <div className='navbar'>     

      <div className={click ? "navMenu active": "navMenu"}>
          <ul>
            <li>
                <Link to="/"><button className="btn" id="home" name="navbar_button">Domu</button></Link>
            </li>
            <li>
                <Link to="/chovatelska_stanice"> <button className='btn' id="kennel" name="navbar_button">Chovatelska stanice</button></Link>
            </li>
            <li>
                <Link to="/strihani"><button className="btn" id="service" name="navbar_button">Stříhání</button></Link>
            </li>
            <li>
                <Link to="/kontakt"><button className="btn" id="contact" name="navbar_button">Kontakt</button></Link>
            </li>
            {user ?<>
              <li>
                <Link to='/pes'><button className='btn' name="navbar_button" id="add_dog">Přidat psa</button></Link>
              </li>
              <li>
                <Link to='/sluzba'><button className='btn' name="navbar_button" id="add_service">Přidat Službu</button></Link>
              </li>
            </>
              :null }
          </ul>
      </div>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"white"}} />):(<FaBars size={20} style={{color:"white"}} />)}
        </div>
    </div>
    
  )
}

export default Navbar