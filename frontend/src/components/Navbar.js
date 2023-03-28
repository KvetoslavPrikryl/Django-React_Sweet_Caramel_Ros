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
    <div className='header'>     

      <div className={click ? "navMenu active": "navMenu"}>
          <ul>
            <li>
                <Link to="/"><button className="btn">Domu</button></Link>
            </li>
            <li>
                <Link to="/chovatelska_stanice"> <button className='btn'>Chovatelska stanice</button></Link>
            </li>
            <li>
                <Link to="/strihani"><button className="btn">Stříhání</button></Link>
            </li>
            <li>
                <Link to="/kontakt"><button className="btn">Kontakt</button></Link>
            </li>
            {user ?<>
              <li>
                <Link to='/pes'><button className='btn'>Přidat psa</button></Link>
              </li>
              <li>
                <Link to='/sluzba'><button className='btn'>Přidat Službu</button></Link>
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