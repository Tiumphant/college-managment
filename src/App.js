import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home"
import Registration from "./page/Registration";
import Userlist from "./page/Userlist";
import Dashboard from "./page/Dashboard";
import AddUser from "./page/AddUser";
import Login from "./page/Login";
import Studentform from "./page/Studentform";
import Marksheetlist from "./page/Marksheetlist";
import Studentlist from "./page/Studentlist";
import Addcollege from "./page/Addcollege";
import Collegelist from "./page/Collegelist";
import Marksheetform from "./page/Marksheetform";
import Rolelist from "./page/Rolelist";
import Addrole from "./page/Addrole";

function App (){
  return(
    <BrowserRouter>
    <Dashboard/>
    <Routes>
      <Route path = "/Home" element ={<Home/>}></Route>
    <Route path = "/Studentlist" element ={<Studentlist/>}></Route>
    <Route path = "/Studentform/:id" element ={<Studentform/>}></Route>
    <Route path = "/Studentform" element ={<Studentform/>}></Route>
    <Route path = "/Marksheetlist" element ={<Marksheetlist/>}></Route>
      <Route path = "/AddUser" element ={<AddUser/>}></Route>
      <Route path = "/AddUser/:id" element ={<AddUser/>}></Route>
      <Route path = "/Login" element ={<Login/>}></Route>
      <Route path = "/Login/:id" element ={<Login/>}></Route>
      <Route path = "/Userlist" element ={<Userlist/>}></Route>
     <Route path = "/Collegelist" element ={<Collegelist/>}></Route>
     <Route path = "/Registration" element ={<Registration/>}></Route>
     <Route path = "/addcollege" element ={<Addcollege/>}></Route>
     <Route path = "/addcollege/:id" element ={<Addcollege/>}></Route>
     <Route path = "/Marksheetform" element ={<Marksheetform/>}></Route>
     <Route path = "/Marksheetform/:id" element ={<Marksheetform/>}></Route>
     <Route path = "/Rolelist" element ={<Rolelist/>}></Route>
     <Route path = "/Addrole" element ={<Addrole/>}></Route>
     <Route path = "/Addrole/:id" element ={<Addrole/>}></Route>
     
    </Routes>
    
    </BrowserRouter>
  )
}
export default App;