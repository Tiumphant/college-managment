import React, { Component } from 'react';
class Studentform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailId: '',
      collegeId: '',
      mobileNo: '',
      isEmpty: false
     }
     this.urlapi ="https://manraj-ors-1.onrender.com/student"
     this.id = window.location.pathname.split("/")[2]
     console.log(this.urlapi);
     if(this.id){
      this.edit()
     }

 }
 handleSubmit(event){
  event.preventDefault()
  console.log("state", this.state);
  if(this.id){
    this.putData()
  }
  else{
    this.postData()
  }
 }
 postData(){
  console.log("post");
  this.setState({isEmpty:true})
  fetch(this.urlapi,{
    method:"POST",
    body: JSON.stringify(),
    headers:{
      "Content-type": "application/json, charset=UTF-8"
    }
  })
  .then ((response) => response.json())
  .then ((json)=>{
    console.log(json);
    window.location.pathname ="Studentlist"
  })
 }
 putData() {
  console.log("put");

  fetch(this.urlapi + "/" + this.id, {
    method: "PUT",
    body: JSON.stringify(this.state),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      window.location.href = "/Studentlist"; // or your actual route
    })
    .catch((error) => console.error("Error in PUT request:", error));
}

 edit(){
  console.log("edit");
  fetch(this.urlapi + "/"+ this.id)
  .then((response) => response.json())
  .then((sum)=>{
    console.log("This is edit", sum);
   // window.location.pathname = "Studentlist"
    this.setState({
      firstName: sum.firstName,
      lastName: sum.lastName,
      emailId: sum.emailId,
      collegeId: sum.collegeId,
      mobileNo: sum.mobileNo
    })
  })
 }

 
  
  render() {
    return (
     <div>
    <h1 className='text-center'>Add Student</h1>
     <div className="container login template d-flex justify-content-center align-items-center  mw-100  bg-secondary">
      <div className="row-justify-container form-container p-5 rounded bg-light">
        <div className="col-md-6">
        <form>
          <div className="form-group">
            <label > First Name:
          <input type="text" placeholder='Name' value={this.state.firstNameName}  onChange={(event)=>this.setState({firstName:event.target.value})}/></label>
          {(this.isEmpty && !this.firstName)&& <span style={{color:"red", textAlign: "center"}}>Required</span>}
           <br/><br />
           <label> Last Name:
          <input type="text" placeholder='last name' value={this.state.lastName}  onChange={(event)=>this.setState({lastName:event.target.value})}/></label>
         {(this.isEmpty && !this.lastName) && <span style={{color:"red", textAlign:"center"}}>Required</span>}
         <br/><br/>
         <label >College id:
         <input type="text" placeholder='city' value={this.state.collegeId}  onChange={(event)=>this.setState({collegeId:event.target.value})}/></label>
         {(this.isEmpty && !this.collegeId) && <span style={{color:"red", textAlign:"center"}}>Required</span>}
         <br /><br />
         <label >Email Id:
         <input type ="email" placeholder='email'  value={this.state.emailId}  onChange={(event)=>this.setState({emailId:event.target.value})}/></label>
         {(this.isEmpty && !this.emailId) && <span style={{color:"red", textAlign:"center"}}>Required</span>}
         <br /><br />
         <label >Mobile no:
         <input placeholder='number'  value={this.state.mobileNo}  onChange={(event)=>this.setState({mobileNo:event.target.value})}/></label>
         {(this.isEmpty && !this.mobileNo) && <span style={{color:"red", textAlign:"center"}}>Required</span>}
         <br /><br />
          <button onClick={(event) => this.handleSubmit(event)}>submit</button>
          </div>
           </form>
        </div>
        </div>
     </div>
     </div>
     
    );
  }
}
export default Studentform;