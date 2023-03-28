import { useState } from "react";
import "./GaleryImgStyles.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaWindowClose } from "react-icons/fa"

const GaleryImg = ({galleryImages}) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openImg, setOpenImg] = useState(false)
    const handleOpenImg=(index) =>{
        setSlideNumber(index) 
        setOpenImg(true)
    }

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(galleryImages.length -1) : setSlideNumber(slideNumber - 1)
    }
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    }
    const closeImg = () => {
        setOpenImg(false)

    }

    return(
        <div>
            
            {openImg && 
                <div className="slideWrap">
                    <div className="slide_image_bar">
                        <FaArrowAltCircleLeft size={35} style={{ color:"white", marginRight:"2rem"}} onClick={prevSlide}/>
                        <FaArrowAltCircleRight size={35} style={{ color:"white", marginRight:"2rem"}} onClick={nextSlide}/>
                        <FaWindowClose size={35} style={{ color:"white", marginRight:"2rem"}} onClick={closeImg}/>
                    </div>
                    <br />
                    <img className="bigImg" src={galleryImages[slideNumber].img} alt="" />
                </div>
            }

            <div className="galleryWrap">
                {
                    galleryImages && galleryImages.map((slide,index) => {
                        return(
                            <div className="singleImg" key={index} onClick={() =>handleOpenImg(index)}>
                                <img src={slide.img} alt="img" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GaleryImg