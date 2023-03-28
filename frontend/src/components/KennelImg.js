import React, {useState, useEffect, useContext} from 'react';
import "./KennelImgStyles.css";
import { Link } from 'react-router-dom'
import AdminContext from '../context/AdminContext';

const KennelImg = () => {
    const [dogMan, setDogMan] = useState([])
    const [dogWomen, setDogWomen] = useState([])
    const [dogPup, setDogPup] = useState([])
    const [dogShow, setDogShow] = useState(false)
    const [pupShow, setPupShow] = useState(false)
    const [bitchShow, setBitchShow] = useState(false)

    let {user} = useContext(AdminContext)

    let getDogs = async () => {
        let response = await fetch("/api/dogs/")
        let data = await response.json().then((snapshot) => {
            let dogMan = []
            let dogWomen = []
            let dogPup = []
            snapshot.forEach((oneDog) => {
                if (oneDog.dog_sex === "pes"){
                    dogMan.push({...oneDog})
                }
                else if (oneDog.dog_sex === "fena"){
                    dogWomen.push({...oneDog})
                }
                else if (oneDog.dog_sex === "štěně"){
                    dogPup.push({...oneDog})
                }
            })
            setDogMan(dogMan)
            setDogWomen(dogWomen)
            setDogPup(dogPup)  
        })
        console.log(data)
        }

    let deleteDog = async (id) => {
        fetch(`/api/dog/${id}/delete`,{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
        })
        getDogs()
    }

    useEffect(() => {
        getDogs()
    },[])


    return (
        <div className='kennel-container'>
            <h1 className='kennel-h1'>Sweet caramel rose</h1>
            <h2 className='kennel-h2'>Naši</h2>
            <div className='kennel-dog'>
                <div className='dog-man'>
                    <button className='btn btn-kennel' onClick={() => setDogShow(!dogShow)}>Psi</button>
                    <section>
                        {dogShow? 
                            <div>
                                {dogMan.map((oneDog) => <div className='dog-box' key={oneDog.id}>
                                    <h2>{oneDog.name}</h2>
                                    <Link to={oneDog.link} className="dog-link">Odkaz</Link>
                                    <p>{oneDog.body}</p>
                                    <img src={oneDog.image} alt="img"/>
                                    {user ? <button onClick={() => deleteDog(oneDog.id)}>Smazat psa</button> :null}
                                </div>)}
                                <hr className='hr' />
                            </div>
                        :null}
                    </section>
                </div>
                <div className='dog-woman'>
                    <button className='btn btn-kennel' onClick={() => setBitchShow(!bitchShow)}>Feny</button>
                    <section>
                        {bitchShow? 
                            <div>
                                {dogWomen.map((oneDog) => <div className='dog-box' key={oneDog.id}>
                                    <h2>{oneDog.name}</h2>
                                    <Link to={oneDog.link} className="dog-link">Odkaz</Link>
                                    <p>{oneDog.body}</p>
                                    {user ? <button onClick={() => deleteDog(oneDog.id)}>Smazat psa</button> :null}
                                </div>)}
                                <hr className='hr' />
                            </div>
                        :null}
                    </section>
                </div> 
                <div className='dog-childern'>
                    <button className='btn btn-kennel' onClick={() => setPupShow(!pupShow)}>Štěňata</button>
                    <section>
                        {pupShow? 
                            <div>
                                {dogPup.map((oneDog) => <div className='dog-box' key={oneDog.id}>
                                    <h2>{oneDog.name}</h2>
                                    <Link to={oneDog.link} className="dog-link">Odkaz</Link>
                                    <p>{oneDog.body}</p>
                                    {user ? <button onClick={() => deleteDog(oneDog.id)}>Smazat psa</button> :null}
                                </div>)}
                                <hr className='hr' />
                            </div>
                        :null}
                    </section>
                </div>
            </div>
        </div>
  )
}

export default KennelImg