import React, {useState} from 'react';
import '../style/contact.css';

function contactForm(){
    const [errorMessage, setErrorMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    const submitForm = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setErrorMessage('All fields are required');
        } 
        else if (!isValidEmail(email) ) {
          setErrorMessage('Email is invalid');
      }
        else {
            setErrorMessage('Message Sent');
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    function isValidEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    const inputChange = (e) => {
        const { name, value } = e.target;   
          console.log(e.target.value);
          if (name === 'name') setName(value);
      else if (name === 'email') setEmail(value);
      else if (name === 'message') setMessage(value);
    }

    return (
        <div class="contact-form">
            <h2> Contact Me</h2>
            <form class="form" onSubmit={submitForm}>
                <p>Name : </p>
                <input type="text" 
                 name="name"
                 value={name}
                placeholder='Your Name:'  
                onChange={inputChange} 
                />

                <p>Email : </p>
                <input type="email" 
                 name="email"
                 value={email}
                placeholder="JohnDoe@gmail.com"
                onChange={inputChange}
                />

                <p>Message : </p>
                <textarea 
                 name="message"
                 value={message}
                placeholder="Text Here"
                onChange={inputChange}
                ></textarea>

                <button type="submit">Send</button> 
                </form>    
                {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
            
      </div>



    )

}

export default contactForm;