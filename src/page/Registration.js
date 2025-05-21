import React, { Component } from 'react';
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
    firstName: "",
    lastName: "",
    loginId: "",
    password: "",
    roleId: "",
    dob: "",
    isEmpty:false
    }
 }
 async handleSubmit(event) {
  event.preventDefault()
  console.log(this.state)

  try {
    this.setState({isEmpty:true})
    const response = await fetch('https://manraj-ors-1.onrender.com/user', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    
    const json = await response.json()
    if (json.message === 'registered successfully') {
      this.setState({ msg: json.message })
    } else {
      localStorage.setItem("token", JSON.stringify(json))
      window.location.pathname = "Login"
    }
  } catch (error) {
    console.error(error)
  }
}
  render() {
    return (
     <div>
     <p style={{ color: "red", textAlign: "center" }}>{this.state.msg}</p>
     <div className="container login template d-flex justify-content-center align-items-center 100-w vh-100 bg-secondary">
      <div className="row-justify-container form-container p-5 rounded bg-light">
        <div className="col-md-6">
        
        <form>
          <div className="form-group">
            <label > First Name:
          <input type="text" placeholder='Name' value={this.state.firstName}  onChange={(event)=>this.setState({firstName:event.target.value})}/></label>
          {(this.state.isEmpty && !this.state.loginId )&& <span style={{ color: "red", textAlign: "center" }}>Must not be Empty</span>} <br/><br />
           <label> Last Name:
          <input type="text" placeholder='Name' value={this.state.lastName}  onChange={(event)=>this.setState({lastName:event.target.value})}/></label>
         <br/><br/>
         <label >Login id:
         <input type="text" placeholder='id' value={this.state.loginId}  onChange={(event)=>this.setState({loginId:event.target.value})}/></label>
         <br /><br />
         <label >password:
         <input  type="password"placeholder='password'  value={this.state.password}  onChange={(event)=>this.setState({password:event.target.value})}/></label>
          <br /><br />
          <label >Rol id:
          <input type="text" placeholder='rol id' value={this.state.roleId}  onChange={(event)=>this.setState({roleId:event.target.value})}/></label>
          <br/><br />
          <label>Date of Birth:
          <input type="date" placeholder='date of birth' value={this.state.dob}  onChange={(event)=>this.setState({dob:event.target.value})}/></label>
          <br /><br />
          <button className='text-center bg-primary' onClick={(event) => this.handleSubmit(event)}>submit</button>
          </div>
           </form>
        </div>
        </div>
     </div>
     </div>
     
    );
  }
}
export default Registration;