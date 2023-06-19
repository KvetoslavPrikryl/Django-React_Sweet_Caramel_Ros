import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import AdminContext from '../context/AdminContext'
import "./CreateStyles.css"
import axios from "axios"


const CreateDog = () => {

  let {user} = useContext(AdminContext)

  let [name, setName] = useState("")
  let [link, setLink] = useState("")
  let [body, setBody] = useState("")
  let [dog, setDog] = useState("")
  let [image, setImage] = useState(null)

  const addNewDog = async() => {
    let axiosConfig ={ headers:{
      "Content-Type" : "multipart/form-data"
    }}
    let newDog = new FormData
    newDog.append("name",name)
    newDog.append("link",link)
    newDog.append("body",body)
    newDog.append("dog",dog)
    if (image !== null){
      newDog.append("image", image)
    }
    console.log(newDog)
    await axios.post("http://127.0.0.1:8000/api/dogs/new", newDog, axiosConfig)
    .then(respons => {
      console.log(respons.data)
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <>{user ?
      <div className='container'>
        <Link to="/chovatelska_stanice" className='back-button'>Zpátky</Link>
        <h2>Přidat psa</h2>
        <form className='add-form'>
          <label className='label-input' htmlFor="name">Jméno psa</label><br/>
          <input 
            name="name" 
            type="text" 
            placeholder='Jméno'
            onChange={e => setName(e.target.value)}
            className="input"
            id="dog_name"
          /> <br/> <hr className='hr'/>
          <label className='label-input' htmlFor="link">Odkaz</label><br/>
          <input 
            name="link" 
            type="text" 
            placeholder='Odkaz'
            onChange={(e) => setLink(e.target.value)}
            className="input"
            id="dog_link"
          /> <br/><hr className='hr'/>
          <label className='label-input' htmlFor="body">Popis psa</label><br/>
          <input 
            name="body" 
            type="text" 
            placeholder='Text o psovi'
            onChange={(e) => setBody(e.target.value)}
            className="input"
            id="dog_body"
          /> <br/><hr className='hr'/>
          <label className='label-input' htmlFor="dog_sex">Pohlaví</label><br/>
          <input className="btn-dog"  type="button" value="Pes" id="button_dog_man" onClick={() => setDog("pes") } />
          <input className='btn-dog' type="button" value="Fena" id="button_dog_bitch" onClick={() => setDog("fena")} />
          <input className='btn-dog' type="button" value="Štěně" id="button_dog_pup" onClick={() => setDog("štěně")} /><br /><hr className='hr'/>
          <br/>
          <input 
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            className='input'
          />
          <br/>
          <Link to="/chovatelska_stanice"><button className='btn btn-add' id="button_save" onClick={() => addNewDog()}>Uložit</button></Link>
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

export default CreateDog