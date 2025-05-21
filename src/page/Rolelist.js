import React, {Component} from "react";

import { Link } from "react-router-dom";
class Rolelist extends Component{
        constructor(){
         super();
         this.state = {
            data:[]
              }
        }
    
    update (){
        fetch("https://manraj-ors-1.onrender.com/role").then((responce) => responce.json()).then((result) => {
            console.log("result...")
            this.setState({data:result})
        })
        
    }
    componentDidMount(){
        this.update()
    }
    delData(id){
        console.log("del id is a", id);
        fetch("https://manraj-ors-1.onrender.com/role/" + id,{ method: 'Delete'}).then((responce)=>responce.json()).then((result) =>{
            console.log("result...");
            this.update()
        })
       
    }
    
    render(){
       console.log(this.state.data);

        return(
            <div>
              <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>discription</th>
                    <th>Operation</th>

                </tr>
            </thead>
            <tbody>
                {
                    this.state.data.map((item) =>{
                        return (
                            <tr key={item._id}>
                             <td>{item.name}</td>
                             <td>{item.discription}</td>
                             <td><Link to={`/Addrole/${item._id}`}><button>Edit</button></Link>
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
 
    
   
export default Rolelist;
         


