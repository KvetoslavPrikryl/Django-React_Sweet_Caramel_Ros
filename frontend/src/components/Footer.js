import React from 'react';
import "./FooterStyles.css";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

const demos = {
    soundcloud:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.9025095336204!2d14.636961629247985!3d50.24318975639274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470beff21d31c061%3A0x7fb5ec445ce70aa7!2zRMWZw61zeSAyNjcsIDI3NyAxNCBExZnDrXN5!5e0!3m2!1scs!2scz!4v1664631491153!5m2!1scs!2scz" width="100%" height="260" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  
    plotly:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.9025095336204!2d14.636961629247985!3d50.24318975639274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470beff21d31c061%3A0x7fb5ec445ce70aa7!2zRMWZw61zeSAyNjcsIDI3NyAxNCBExZnDrXN5!5e0!3m2!1scs!2scz!4v1664631491153!5m2!1scs!2scz" width="100%" height="260" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  };

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

function Footer () {
  return (
        <div className="footer-container">
            <div className="cont-left">
                <div className="location">
                    <FaHome size={20} style={{ color:"white", marginRight:"2rem"}}/>
                    <div>
                        <p>Ulice</p>
                        <p>Město</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                       <FaPhone size={20} style={{ color:"white", marginRight:"2rem"}}/> 
                       Tel. číslo
                    </h4>
                    <h4>
                       <FaMailBulk size={20} style={{ color:"white", marginRight:"2rem"}}/> 
                       E-mail
                    </h4>
                </div>
            </div>
            <div className="cont-right" style={{width: "100%", height: "290px",}}>
                <Iframe iframe={demos["soundcloud"]} allow="autoplay" />
            </div>
        </div>
  )
}

export default Footer