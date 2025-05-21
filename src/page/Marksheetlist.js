import React, {Component} from "react";

import { Link } from "react-router-dom";
class Marksheetlist extends Component{
        constructor(){
         super();
         this.state = {
            data:[]
              }
        }
    
    update (){
        fetch("https://manraj-ors-1.onrender.com/marksheet").then((responce) => responce.json()).then((result) => {
            console.log("result...")
            this.setState({data:result})
        })
        
    }
    componentDidMount(){
        this.update()
    }
    delData(id){
        console.log("del id is a", id);
        fetch("https://manraj-ors-1.onrender.com/marksheet/" + id,{ method: 'Delete'}).then((responce)=>responce.json()).then((result) =>{
            console.log("result...");
           this.update()
        })
       
    }
    
    render(){
       console.log(this.state.data);

        return(
          <div>
            <h1 className='text-center'>Marsheet of student</h1>
           <table className='table table-striped table-bordered table-light'>
            <thead >
                <tr><th>Name</th>
                    <th>Student Id</th>
                    <th>rollNo</th>
                    <th>Physics</th>
                    <th>Chemistry</th>
                    <th>Math</th>
                    <th>Operation</th>
                   
               </tr>
            </thead>
            <tbody>
                {
                  this.state.data.map((item) =>{
                  return (
                      <tr key={item._id}>
                             <td>{item.name}</td>
                             <td>{item.studentId}</td>
                             <td>{item.rollNo}</td>
                             <td>{item.physics}</td>
                            <td>{item.chemistry}</td>
                            <td>{item.maths}</td>
                            
                            <td><Link to={`/Marksheetform/${item._id}`}> <button>Edit</button></Link>
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
 
    
   
export default Marksheetlist;
         


