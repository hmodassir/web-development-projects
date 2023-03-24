import React from 'react'
import dustbinIm from '../images/dustbin.png'
import {Link, NavLink} from 'react-router-dom'

class AddContact extends React.Component{
  state = {
    name:"",
    email:""
}
  
  addContactList = (e)=>{
    e.preventDefault()
    if(this.state.name == "" || this.state.email==""){
      alert("fields must not be empty")
      return 
    }
    this.props.addContactHandler(this.state)
  
    this.setState({name:"",email:""})
    
    // this.props.history.push('/',this.props)
    
  }
  
  render(){
      return (
          <div className="add-contact-container">
          <h3>Add Contact</h3>
            <form onSubmit={this.addContactList}>
            <div className="form-info-container">
              <label for="name">Name</label>
              <input  type="text" id="name" name="name" placeholder="name" required   value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
              <label for="email">Email</label>
              <input  type="email" id="email" name="eamil" placeholder="email" required value={this.state.email}  onChange={(e)=>this.setState({email:e.target.value})}/>
              
              </div>
              <button className="add-btn" >Add</button>
            
              </form>
              <Link to="/">
              <button className="add-btn">
                Back
              </button>
              </Link>
          </div>
        )
    }
}

export default AddContact
// import React from "react";
// import {Link} from 'react-router-dom'

// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   add = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("ALl the fields are mandatory!");
//       return;
//     }
//     this.props.addContactHandler(this.state);
//     this.setState({ name: "", email: "" });
//     this.props.history.push("/");
//   };
//   render() {
//     return (
//       <div className="ui main">
//         <h2>Add Contact</h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//                     <button className="ui button blue">Add</button>
          
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;
