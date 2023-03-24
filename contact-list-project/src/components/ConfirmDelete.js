import React from 'react'
import {useLocation, NavLink} from 'react-router-dom'

export default function ConfirmDelete(props){
  const location = useLocation()
  const data = location.state
  
  function deleteContact(){
   props.idHandler(data.state.id)
  }


  return (
    <div className="confirm-delete-container">
    <h2>Are you sure you want to delete?</h2>
    <p> Name: {data.state.name}</p>
    <p>Email: {data.state.email}</p>
    <div className="confirm-delete-btn-container">
      <NavLink to="/">
        <button className="btn" onClick={deleteContact}>YES</button><br/>
      </NavLink>
      <NavLink to="/">
        <button className="btn">NO</button>
      </NavLink>
    </div>
    </div>
    
    )
}