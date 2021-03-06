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

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
const Contact = () => {

    const [ email, setMail] = useState(""); 
    const [fieldError, setError] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

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
           return setError( "sorry, textfield cannot be empty" );

        }

        var err = emailIsValid(e.target.value);

        if (err === false) {
           return setError( "sorry, enter a valid email address, thank you." );
        }
        

        setMail( e.target.value );
        

    }

    const handleSubmit = (evt) => {

        evt.preventDefault(); 
        //if no error
        if (email) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", email })
            })
            .then(() => {
                setIsOpen(!isOpen);
            })
            .then (()=>setMail("") )
            .then(()=> setError(""))
            .catch(error => console.log(error)); 
            
        }
        
        
        
    }

    return <div className="contact" id="lt-contact" data-aos="fade-up">
         
        <form onSubmit={handleSubmit} name="contact"  method="post" action="/" data-netlify="true"  data-netlify-honeypot="bot-field">
            <div className="form-cover">
                <b> <strong> Contact-Me </strong>  </b>
                <p className="contact-text">
                    Shoot me a mail at <strong>@aphilemon.aa@gmail.com</strong> if you have a job for me,
                    i'm currently available and willing to collaborate, you can also send 
                    me your email address so i can contact you.
                </p>

                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                    <label>
                        Donot fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>

                <label>Email:</label>
                <div className="form-mail">
                    <input type="email" onChange={ validateMail} name="email" placeholder="johnDoe@mail.com"  />
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