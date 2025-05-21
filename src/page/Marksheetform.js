import React, { Component } from 'react';
class Marksheetform extends Component {
  constructor(props) {
    super(props);
    this.state = {
   name:"",
   studentId : "",
   rollNo: "",
   physics: "",
   chemistry:"",
   maths:"",
   isEmpty: false,
     }
    this.urlapi = "https://manraj-ors-1.onrender.com/marksheet"
     this.id = window.location.pathname.split("/")[2]
     console.log(this.id);
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
  console.log("Post");
  this.setState({isEmpty: true})
  fetch(this.urlapi,{
  method: "POST",
  body: JSON.stringify(),
  headers:{
    "Content-type": "application/json, charset=UTF-8"
  } 
    
  })
  .then((responce) => responce.json())
  .then((sum) => {
    console.log(sum);
    window.location.pathname="Marksheetlist"
  })
}
putData(){
  console.log("put");
  fetch(this.urlapi + "/"+ this.id,{
   method: "PUT",
   body: JSON.stringify(),
   headers: {
    "Content-type": "application/json, charset=UTF-8"
   }, })
   .then((responce) => responce.json())
   .then((sum) =>{
    console.log(sum);
    window.location.pathname = "Marksheetlist"
   })

}

 edit(){
  fetch(this.urlapi + this.id)  
  .then ((responce) => responce.json()) 
  .then((result) => {
    console.log("result", result);
    this.setState(
      {
        name: result.name,
        studentId : result.studentId,
        rollNo: result.rollNo,
        physics: result.physics,
        chemistry:result.chemistry,
        maths: result.maths
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      }
    )

  }
) 
 }
 handleSubmit(event) {
  event.preventDefault()
  console.log(this.state)
  fetch('https://manraj-ors-1.onrender.com/marksheet', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
      .then((response) => response.json())
      .then((json) => {
          console.log(json);
         // window.location.pathname = "Marksheetlist"
          
      });}
  render() {
    return (
     <div>
    <h1 className='text-center'>Add Marksheet</h1>
     <div className="container login template d-flex justify-content-center align-items-center  mw-100  bg-secondary">
      <div className="row-justify-container form-container p-5 rounded bg-light">
        <div className="col-md-6">
        <form>
          <div className="form-group">
            <label >  Name:
          <input type="text" placeholder='Name' value={this.state.name}  onChange={(event)=>this.setState({name:event.target.value})}/></label>
          {(this.isEmpty && this.name)&& <span style={{color: "red", textAlign: "center"}}>Required</span>}
           <br/><br />
           <label> Student Id :
          <input type="number" placeholder='id' value={this.state.studentId}  onChange={(event)=>this.setState({studentId:event.target.value})}/></label>
          {(this.isEmpty && this.studentId)&& <span style={{color: "red", textAlign: "center"}}>Required</span>}
        
         <br/><br/>
         <label >Roll No:
         <input type="number" placeholder='role number' value={this.state.rollNo}  onChange={(event)=>this.setState({rollNo:event.target.value})}/></label>
         <br /><br />
         <label >Physics:
         <input type='number' placeholder='number'  value={this.state.physics}  onChange={(event)=>this.setState({physics:event.target.value})}/></label>
         {(this.isEmpty && this.physics)&& <span style={{color: "red", textAlign: "center"}}>Required</span>}
        
         <br /><br />
         <label >Chemistry:
         <input type='number' placeholder='number'  value={this.state.chemistry}  onChange={(event)=>this.setState({chemistry:event.target.value})}/></label>
         {(this.isEmpty && this.chemistry)&& <span style={{color: "red", textAlign: "center"}}>Required</span>}
        
         <br /><br />
         <label >Maths:
         <input type='number' placeholder='number'  value={this.state.maths}  onChange={(event)=>this.setState({maths:event.target.value})}/></label>
         {(this.isEmpty && this.maths)&& <span style={{color: "red", textAlign: "center"}}>Required</span>}
        
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
export default Marksheetform;