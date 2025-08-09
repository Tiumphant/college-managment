import React, {Component} from "react";
import { Link } from "react-router-dom";
class Studentlist extends Component{
        constructor(){
         super();
         this.state = {
            data:[]
              }
        }
    
    update (){
        fetch("https://manraj-ors-1.onrender.com/student").then((responce) => responce.json()).then((result) => {
            console.log("result...")
            this.setState({data:result})
        })
        
    }
    componentDidMount(){
        this.update()
    }
    delData(id){
        console.log("del id is a", id);
        fetch("https://manraj-ors-1.onrender.com/student/" + id,{ method: 'Delete'}).then((responce)=>responce.json()).then((result) =>{
            console.log("result...");
            this.update()
        })
       
    }
    
    render(){
       console.log(this.state.data);

        return(
            <div>
            <h1 className="text-center">Student list</h1>
           <table className="table table-striped">
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                     <th>Email Id</th>
                    <th>college Id</th>
                    <th>Mobile no</th>
                    <th>Operation</th>

                </tr>
            </thead>
            <tbody>
                {
                    this.state.data.map((item) =>{
                        return (
                            <tr key={item._id}>
                             <td>{item.firstName}</td>
                             <td>{item.lastName}</td>
                             <td>{item.emailId}</td>
                             <td>{item.collegeId}</td>
                             <td>{item.mobileNo}</td>
                             
                             <td><Link to={`/Studentform/${item._id}`}><button>Edit</button> </Link>
                             <button onClick={() =>{this.delData(item._id)}}>Del</button></td>
                            </tr>

                        )
                    } )
                }
            </tbody>
           </table>
           </div>
        )
    }
}
 
    
   
export default Studentlist;
         


