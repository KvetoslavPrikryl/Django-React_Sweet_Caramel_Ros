import React, {useEffect, useState, useContext} from 'react'
import "./CuttingImgStyles.css"
import AdminContext from '../context/AdminContext'

const CuttingImg = () => {

  let {user} = useContext(AdminContext)

  let [service, setService] = useState([])

  let getService = async () => {
    let response = await fetch("/api/services/")
    let data = await response.json()
    setService(data)
  }

  let deleteService = async (id) => {
    fetch(`api/service/${id}/delete`, {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json"
      }
    })
    getService()
  }

  useEffect(() => {
    getService()
  }, [])

  return (
    <div className='cutting-container'>
      <div className='cutting-table'>
        <h2 className='title-cutting-h2'>Péče o zvířata</h2>
        <h1 className="title-cutting-h1"> U sladké růže</h1>
        <div className='services'>
          {service.map((data) => {
            return <div className='service' key={data.id}>
              {data.name}
              <span className='price'>{data.price} Kč</span>
              {user ? <button className='delete-servis' onClick={() => deleteService(data.id)}>Smazat</button> :null}
            </div>})}
        </div>
      </div>
    </div>
  )
}

export default CuttingImg