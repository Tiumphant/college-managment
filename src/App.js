import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Addcollege from "./page/Addcollege";
import Addrole from "./page/Addrole";
import AddUser from "./page/AddUser";
import Collegelist from "./page/Collegelist";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Marsksheetform from "./page/Marksheetform";
import Marksheetlist from "./page/Marksheetlist";
import Registration from "./page/Registration";
import Rolelist from "./page/Rolelist";
import Studentform from "./page/Studentform";
import Studentlist from "./page/Studentlist";
import Userlist from "./page/Userlist";

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/addcollege" element={<Addcollege />} />
        <Route path="/addcollege/:id" element={<Addcollege />} />
        <Route path="/addrole" element={<Addrole />} />
        <Route path="/addrole/:id" element={<Addrole />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/adduser/:id" element={<AddUser />} />
        <Route path="/collegelist" element={<Collegelist />} />
        <Route path="/collegelist/:id" element={<Collegelist />} />
        <Route path="/rolelist" element={<Rolelist />} />
        <Route path="/rolelist/:id" element={<Rolelist />} />
        <Route path="/studentform" element={<Studentform />} />
        <Route path="/studentform/:id" element={<Studentform />} />
        <Route path="/studentlist" element={<Studentlist />} />
        <Route path="/studentlist/:id" element={<Studentlist />} />
        <Route path="/marksheetform" element={<Marsksheetform />} />
        <Route path="/marksheetform/:id" element={<Marsksheetform />} />
        <Route path="/marksheetlist" element={<Marksheetlist />} />
        <Route path="/marksheetlist/:id" element={<Marksheetlist />} />
        <Route path="/userlist/:id" element={<Userlist />} />
        <Route path="/userlist" element={<Userlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
