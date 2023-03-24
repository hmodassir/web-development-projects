import React, {useState, useEffect} from 'react';
import AddContact from './AddContact.js';
import ContactList  from './ContactList.js';
import Header from './Header.js'
import {v4 as uuid} from 'uuid'
import {Routes, Route, Link} from 'react-router-dom'
import ContactDetail from './ContactDetail.js'
import ConfirmDelete from './ConfirmDelete.js'
import api from '../api/contact.js'

export default function App(){
const LOCAL_STORAGE_KEY = 'CONTACTS'

const [contacts, setContacts] = useState([])

const contactHandler = (data)=>{
  setContacts(prevData =>{
    return([...prevData,{id:uuid(),...data}])
  }
  )

}

const deleteContact = (id)=>{
  
  const newContact = contacts.filter((contact)=>{
    return contact.id !== id
  })
  setContacts(newContact)
}

const retrieveContacts = async ()=>{
  const response = await api.get('/contacts')
  return response.data
} 

useEffect(()=>{
  
  const getAllContacts = async ()=>{
    try{
        
    const allContacts = await retrieveContacts();
        setContacts(allContacts);
    }catch(error){
      alert(error)
    }
  }
  getAllContacts()
},[]);

useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  
  return (
    <div>
    <Header/>
    <div className="main-container">
    <Routes>
        <Route path="/" element={<ContactList contact={contacts}  />}/>
      
        <Route path="/addcontact" element={<AddContact addContactHandler={contactHandler}/>}/>
      
        <Route path="/contactdetail/:id" element={<ContactDetail/>}/>
        
        <Route path="/confirmdelete" element={<ConfirmDelete idHandler={deleteContact}/>}/>
      
                                                                                                                                                                                                                                                                                             </Routes>
    </div>
    </div>
    )
}