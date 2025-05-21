import React, { Component } from 'react';
class Addcollege extends Component {
  constructor(props) {
    super(props);
    this.state = {
    collegeName: "",
    address: "",
    city: "",
    mobileNo: "",
    isEmpty: false,
     }
     this.urlapi = "https://manraj-ors-1.onrender.com/college";
     this.id = window.location.pathname.split("/")[2]
     console.log(this.urlapi);
     if(this.id){
     this.edit()
     }
     
 }
 handleSubmit(event){
  event.preventDefault();
  console.log("State",this.state);
  if(this.id){
    this.putData();
  }
  else{
    this.postData();
  }

 }
 postData(){
  console.log("post");
  this.setState({isEmpty:true})
  fetch(this.urlapi, {
    method: "POST",
    body: JSON.stringify(this.state),
    headers:{
      "Content-type": "application/json,charset=UTF-8",
    },})
    .then((response)=> response.json())
    .then((json) =>{
      console.log(json);
      window.location.pathname= "Collegelist"
    })
  }
  putData(){
    console.log("put");
    fetch(this.urlapi, + this.id,{
      method: "PUT",
      body: JSON.stringify(),
      header:{
        "Content-type": "application/json,charset=UTF-8"
      },})
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        window.location.pathname="Collegelist"
      
    })
  }
  edit(){
    console.log("edit");
    fetch(this.urlapi + "/" + this.id)
    .then((response) =>response.json())
    .then((sum) =>{
      console.log("this is edit", sum);
      this.setState({
         collegeName: sum.collegeName,
         address: sum.address,
         city: sum.city,
         mobileNo: sum.mobileNo
        });  

      
    })
  }

 
  render() {
    return (
     <div>
    <h1 className='text-center'>Add College</h1>
     <div className="container login template d-flex justify-content-center align-items-center  mw-100  bg-secondary">
      <div className="row-justify-container form-container p-5 rounded bg-light">
        <div className="col-md-6">
        <form>
          <div className="form-group">
            <label > College Name:
          <input type="text" placeholder='Name' value={this.state.collegeName}  onChange={(event)=>this.setState({collegeName:event.target.value})}/></label>
          {(this.state.isEmpty && !this.state.collegeName)&& <span style={{color:"red",textAlign:"center"}}>Required</span>}
           <br/><br />
           <label> Address Name:
          <input type="address" placeholder='address' value={this.state.address}  onChange={(event)=>this.setState({address:event.target.value})}/></label>
          {(this.state.isEmpty && !this.state.address)&& <span style={{color:"red",textAlign:"center"}}>Required</span>}
         <br/><br/>
         <label >City:
         <input type="text" placeholder='city' value={this.state.city}  onChange={(event)=>this.setState({city:event.target.value})}/></label>
         {(this.state.isEmpty&& !this.state.city)&&<span style={{color: "red", textAlign: "center"}}>Required</span>}
         <br /><br />
         <label >Mobile no:
         <input placeholder='number'  value={this.state.mobileNo}  onChange={(event)=>this.setState({mobileNo:event.target.value})}/></label>
        {(this.state.isEmpty&& !this.state.mobileNo)&& <span style={{color: "red", textAlign:"center"}}>Required</span>}
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
export default Addcollege;