import React, { Component } from 'react';

class Addrole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      discription: "",
      errors: {}
    }
    this.id = window.location.pathname.split("/")[2]
    console.log(this.id)
    if(this.id){
      this.get()
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
  
    if (Object.keys(errors).length === 0) {
      if (this.id) {
        this.putData(); // Call putData if editing
      } else {
        this.postData(); // Call postData if adding new
      }
    }
  }
  postData() {
    console.log("POST request to create role");
    fetch("https://manraj-ors-1.onrender.com/role", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        discription: this.state.discription,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Created role:", json);
        window.location.pathname = "/Rolelist";
      });
  }
  componentDidMount() {
    if (this.id) {
      this.edit();
    }
  }

  
  // handleSubmit(event) {
  //   event.preventDefault()
  //   const errors = this.validate();
  //   this.setState({ errors });
  //   if (Object.keys(errors).length === 0) {
  //     console.log(this.state)
  //     fetch('https://manraj-ors-1.onrender.com/role', {
  //       method: 'POST',
  //       body: JSON.stringify(this.state),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       },
  //     })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       window.location.pathname = "Rolelist"
  //     });
  //   }
  // }
  putData() {
    console.log("PUT request to update role");
    fetch("https://manraj-ors-1.onrender.com/role/" + this.id, {
      method: "PUT",
      body: JSON.stringify({
        name: this.state.name,
        discription: this.state.discription,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Updated role:", json);
        window.location.pathname = "/Rolelist";
      });
  }
  

  validate() {
    const errors = {};
    if (!this.state.name) {
      errors.name = "Name is required";
    }
    if (!this.state.discription) {
      errors.discription = "Discription is required";
    }
    return errors;
  }

  render() {
    return (
      <div className='form'>
        <h1 className='text-center'>Add Role</h1>
        <div className="container login template d-flex justify-content-center vh-100 align-items-center bg-secondary">
          <div className="row-justify-container form-container p-5 rounded bg-light">
            <div className="col-md-7">
              <form>
                <div className="form-group">
                  <label > Name: 
                    <input 
                      type="text" 
                      placeholder='Name' 
                      value={this.state.name} 
                      onChange={(event)=>this.setState({name:event.target.value})}
                    />
                    {this.state.errors.name && (
                      <div style={{ color: "red" }}>{this.state.errors.name}</div>
                    )}
                  </label>
                  <br/><br />
                  <label> Discription: 
                    <input 
                      type="text" 
                      placeholder='Name' 
                      value={this.state.discription} 
                      onChange={(event)=>this.setState({discription:event.target.value})}
                    />
                    {this.state.errors.discription && (
                      <div style={{ color: "red" }}>{this.state.errors.discription}</div>
                    )}
                  </label>
                  <br/><br/>
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

export default Addrole;