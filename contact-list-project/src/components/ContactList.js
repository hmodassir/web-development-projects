import React from 'react';
import ContactCard from './ContactCard.js'
import { NavLink} from 'react-router-dom'

export default function ContactList(props){
  const renderContacts = props.contact.map((item)=>{
  
  // const contactId = (id)=>{
  //   props.getContactId(id)
  // }
    return (
        <ContactCard items={item} />
      )
  })
  
  return (
  <div>
    <h2>Contact List</h2>
    <NavLink to="/addcontact">
      <button className="add-btn">Add Contact</button>
    </NavLink>
    {renderContacts}
  </div>
  )
}

