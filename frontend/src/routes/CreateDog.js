import {useState, useEffect, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import AdminContext from '../context/AdminContext'
import "./CreateStyles.css"


const CreateDog = () => {

  let {user} = useContext(AdminContext)

  const id = useParams()

  let [name, setName] = useState(null)
  let [link, setLink] = useState(null)
  let [body, setBody] = useState(null)
  let [newName, setNewName] = useState("")
  let [newLink, setNewLink] = useState("")
  let [newBody, setNewBody] = useState("")
  let [dog, setDog] = useState("")
  let [image, setImage] = useState(null)
  let [active, setActive] = useState("")

  useEffect(() => {
    let getDog = async () => {
      if (id !== "new") return
      let response = await fetch(`api/dog${id}`)
      let data = await response.json().then((snapshot) => {
        setName(snapshot.name)
        setLink(snapshot.link)
        setBody(snapshot.body)
      })
      console.log(data)
    }
    getDog()
  }, [id])

  let newDog = {
    newName,
    newLink,
    newBody,
    dog_sex : dog,
    img : image
  }

  const addNewDog = () => {
    fetch(`api/dogs/new`, {
      method: "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(newDog)
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
            onChange={(e) => setNewName({...name, "name" : e.target.value})}
            value={name}
            className="input"
          /> <br/> <hr className='hr'/>
          <label className='label-input' htmlFor="link">Odkaz</label><br/>
          <input 
            name="link" 
            type="text" 
            placeholder='Odkaz'
            onChange={(e) => setNewLink({...link, "link" : e.target.value})}
            value={link}
            className="input"
          /> <br/><hr className='hr'/>
          <label className='label-input' htmlFor="body">Popis psa</label><br/>
          <input 
            name="body" 
            type="text" 
            placeholder='Text o psovi'
            onChange={(e) => setNewBody({...body, "body" : e.target.value})}
            value={body}
            className="input"
          /> <br/><hr className='hr'/>
          <label className='label-input' htmlFor="dog_sex">Pohlaví</label><br/>
          <input className="btn-dog"  type="button" value="Pes" onClick={() => setDog("pes") } />
          <input className='btn-dog' type="button" value="Fena" onClick={() => setDog("fena")} />
          <input className='btn-dog' type="button" value="Štěně" onClick={() => setDog("štěně")} /><br /><hr className='hr'/>
          <label className='label-input' htmlFor="image">Obrázek</label><br />
          <input 
            type="file" 
            name="image"
            onChange={(e) =>setImage(e.target.files[0])}
          />
          <img src={image} alt="img" />
          <br/><hr className='hr-dog'/>
          {id === "new" ?<Link to="/chovatelska_stanice"><button className='btn btn-add' >Upravit</button></Link> 
          : <Link to="/chovatelska_stanice"><button className='btn btn-add' onClick={() => addNewDog()}>Uložit</button></Link>}
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