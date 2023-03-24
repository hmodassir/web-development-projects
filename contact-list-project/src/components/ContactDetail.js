import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import profilePic from '../images/user (1).png'

export default function ContactDetail(){
  const location = useLocation()
  const contactData = location.state
  
  return(
    <div className="contact-details">
    <img src={profilePic} alt="profile-pic"/>
      <div className="name">
      <span> Name </span>
        <p> {contactData.name}</p>
        </div>
      <div className="email">
       <span> Eamil </span>
        <p>{contactData.email}</p>
        </div>
        <Link to="/">
          <button className="btn">Back To Contact List</button>
        </Link>
      
    </div>
    )
  
}