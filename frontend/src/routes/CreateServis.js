import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import "./CreateStyles.css"
import AdminContext from '../context/AdminContext'


const CreateServis = () => {

    let {user} = useContext(AdminContext)

    let [newService, setNewService] = useState("")
    let [newPrice, setNewPrice] = useState("")

    let addService = {
        newService,
        newPrice
    }

    const addNewService = () => {
        fetch(`api/service/new`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(addService)
        })
    }

  return (
    <>{user ? 
    <div className='container'>
        <Link to="/strihani" className="back-button">Zpátky</Link>
        <h2>Přidat služku</h2>
        <form className='add-form'>
            <label className='label-input' htmlFor="name">Název</label><br/>
            <input 
                name='name' 
                type="text" 
                placeholder='Název služby'
                onChange={(e) => setNewService(e.target.value)} 
                value={newService}
                className="input"
                />
            <br /><hr className='hr'/>
            <label className='label-input' htmlFor="price">Cena</label><br/>
            <input
                name="price"
                type="number"
                placeholder='cena'
                onChange={(e) => {setNewPrice(e.target.value)}}
                value={newPrice}
                className="input"
                />
            <br /><hr className='hr'/>
            <Link to="/strihani"><button className='btn btn-add' onClick={() => addNewService()}>Uložit</button></Link>
        </form>
    </div>
    : 
    <div>
        <h1>Nejste přihlášeni!</h1>
        <Link to="/prihlasit">Přihlásit se!</Link>
      </div>
    }
    </>
  )
}

export default CreateServis