import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo3 from './logo3.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  let auth = localStorage.getItem("token");

  function handleLogout() {
    console.log("handleLogout");
    localStorage.clear();
    window.location.pathname = "login";
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3 shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo3} alt="Logo" width="50" height="50" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!auth ? (
              <>
                <Link className='nav-link' to="/Registration">Registration</Link>
                <Link className='nav-link' to="/Login">Login</Link>
              </>
            ) : (
              <>
                <Link className='nav-link' to="/Home">Home</Link>

                <NavDropdown title="User" id="user-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/AddUser">Add User</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Userlist">User List</NavDropdown.Item>
                </NavDropdown>
                
                <NavDropdown title="College" id="college-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Addcollege">Add College</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Collegelist">College List</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Student" id="student-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Studentform">Add Student</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Studentlist">Student List</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Marksheet" id="marksheet-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Marksheetform">Add Marksheet</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Marksheetlist">Marksheet List</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Role" id="role-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Addrole">Add Role</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Rolelist">Role List</NavDropdown.Item>
                </NavDropdown>

                <Link className='nav-link text-danger fw-bold' to="/login" onClick={handleLogout}>
                  Logout ({JSON.parse(auth)?.firstName})
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Dashboard;