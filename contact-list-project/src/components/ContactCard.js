import React from 'react';
import userImg from '../images/profile-user.png'
import dustbinImg from '../images/dustbin.png'
import {Link} from 'react-router-dom'

export default function ContactCard(props){

    return (
      
      <div className="profile-container">
      <div className="user-img-container">
      <img className="user-img" src={userImg} alt="
      "/>
      </div>
        <div className="name-email-container"> 
        <Link to={`/contactdetail/${props.items.id}`} state={props.items} className="contact-card-link">
        <p className="contact-list-name">{props.items.name}</p>
        </Link>
        <p className="contact-list-email">{props.items.email}</p>
      </div>
        <div className="dustbin-img-container">
        <Link to="/confirmdelete" state={{state:props.items}}>
        <img src={dustbinImg} alt="sdsd" className="dustbin-img" 
        />
        </Link>
      </div>
      </div>
      
      )
      
}