import React from 'react'
import './ContactMe.css'
import { AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
export default function ContactMe() {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard link="" text={"sekhar.gh25@gamail.com"} IconComponent={AiOutlineMail}/>
                <ContactInfoCard link="https://github.com/sekharg62/" text={"https://github.com/sekharg62/"} IconComponent={FiGithub}/>
                <ContactInfoCard link="https://www.linkedin.com/in/sekhar-ghosh-cse26/" text={"https://www.linkedin.com/in/sekhar-ghosh-cse26/"} IconComponent={FaLinkedin}/>
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}
