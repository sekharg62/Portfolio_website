import React from 'react'
import './ContactInfoCard.css'
export default function ContactInfoCard({ text,link, IconComponent }) {
  return (
    <div className="contact-details-card" onClick={() => window.open(link, '_blank')} style={{ cursor: 'pointer' }}>
      <div className="icon" >
          <IconComponent className="img" />
      </div><p>{text}</p>
    </div>
  )
}
