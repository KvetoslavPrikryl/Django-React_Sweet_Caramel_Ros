import "./FormStyles.css"
/*
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
*/


const Form = () => {

/* const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service', 'template', form.current, 'public_key')
    .then((result) => {
        console.log(result.text);
    }, 
    (error) => {
        console.log(error.text);
    });
    e.target.reset()
};*/

  return (
    <div className="contactForm">
        <div className="form">
            <form>
                <label>Vaše jméno:</label>
                <input type="text" name="user_name"></input>
                <label>Email:</label>
                <input type="text" name="user_email"></input>
                <label>Předmět:</label>
                <input type="text" name="subject"></input>
                <label>Zpráva:</label>
                <textarea rows="6" placeholder="Sem napiště Vaši zprávu:" name="user_text"/>
                <button className="btn formBtn">Odeslat</button>
            </form>
        </div>
    </div>
  )
}

export default Form