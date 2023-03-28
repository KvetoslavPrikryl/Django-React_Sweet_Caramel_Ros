import GaleryImg from "./GaleryImg"
import "./CuttingGraleryStyles.css"
import dog1 from "../img/Dog1.jpg";
import dog2 from "../img/Dog2.jpg"
import dog3 from "../img/Logo.jpg"

function CuttingGalery () {
    const galleryImages = [
        {img: dog1},
        {img: dog2},
        {img: dog3}
    ]

    return(
        <div className='cuting-galery'>
            <h2>Galerie</h2>
            <GaleryImg galleryImages={galleryImages}/>
        </div>
    )
}

export default CuttingGalery