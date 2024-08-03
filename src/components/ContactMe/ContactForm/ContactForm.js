import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactFrom.css'
export default function ContactForm() {
  const [fname, setFame] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message,setMessage] = useState('')
  const [success, setSuccess] = useState(null);
  const ref = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_a91dif7', 
        'template_gjntv3t', 
        ref.current, 
        'xb-_tDkQl8ccBPoxM'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false);
        }
      );
  };
  return (
    
   <div className="contact-form-content">
    <form ref={ref} action="" onSubmit={handleSubmit}>
        <div className="name-container">
            <input type="text" name="firstname" placeholder='Firstname' onChange={(e) => setFame(e.target.value)} />
            <input type="text" name="lastname" placeholder='Lastname' onChange={(e) => setLname(e.target.value)}/>
        </div>
        <input type="text" name='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <textarea name="message" type='text' id="" placeholder='Message' rows={3} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button>SEND</button>
        {success !== null && (
              <div className={success ? 'success-message' : 'error-message'}>
                {success ? "Your message has been sent. We'll get back to you soon!" : 'Failed to send message. Please try again later.'}
              </div>
            )}
    </form>
   </div>
  )
}
 