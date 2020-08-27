import React, {useEffect, useState} from "react";
import "./contact.css";
import Popup from './popup';
import AOS from "aos";
import "aos/dist/aos.css";
import thankYou from "../images/thank-you.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-brands-svg-icons';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(  
    faCheckCircle
);
const Contact = () => {

    const [ email, setMail] = useState(""); 
    const [fieldError, setError] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        // setError("");
        // setMail( "");
    });

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const validateMail = (e) => {       
        
        var value = e.target.value;

        

        if (!value) {
           return setError( "Please the textfield cannot be left empty" );

        }

        var err = emailIsValid(e.target.value);

        if (err === false) {
           return setError( "Please enter a valid email address, thank you." );
        }
        

        setMail( e.target.value );
        

    }

    const handleSubmit = (evt) => {

        //if no error
        if (email) {
                       
            setIsOpen(!isOpen);
            setMail("");
            setError("");
            
        }        
        evt.preventDefault();
    }

    return <div className="contact" id="lt-contact" data-aos="fade-up">
         
        <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" >
            <div className="form-cover">
                <b> <strong> Contact-Me </strong>  </b>
                <p className="contact-text">
                    Shoot me a mail at <strong>@aphilemon.aa@gmail.com</strong> if you have a job for me,
                    i'm currently available and willing to collaborate, you can also send 
                    me your email address so i can contact you.
                </p>

                <label>Email:</label>
                <div className="form-mail">
                    <input type="text" onChange={ validateMail} name="email" placeholder="johnDoe@mail.com"  />
                    <input type="submit" value="Submit" />
                </div>
            </div>
                       
        </form>        
        { fieldError && <p className="error"> { fieldError }</p> }  

        {isOpen && <Popup
        content={
            <>
                <b> <FontAwesomeIcon icon={['fas', 'check-circle']} color="green" size="lg" style={{ marginRight:"10"}} /> Email Sent</b>
                <img className="thank-you" src={thankYou} alt="thankyou" />
                <p>Thank you, <br/> i'll contact you soon.</p>
                           
            </>
        }
        handleClose={togglePopup}
        />}
    </div>
    

}

export default Contact;