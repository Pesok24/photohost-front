import React, { useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Register from './Register';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import Logout from './Logout';
import { newUser, newUserName } from '../features/counter/userSlice';
import ImageLoader from './ImageLoader';

const NavBar = () => {
  const dispatch = useDispatch()


  let localUser = localStorage.getItem('user')
  let localUserName = localStorage.getItem('userName')
  const globalUser = useSelector( state => state.user.name )
  const globalUserName = useSelector( state => state.user.userName )
console.log(globalUserName);

useEffect(() => {
  dispatch(newUser(localUser))
  dispatch(newUserName(localUserName))
})

  return ( 
    <>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">PhotoHost</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {globalUser ? <Logout /> : <Login />}
      {globalUser ? <NavDropdown title={globalUser ? globalUserName : 'none'} id="basic-nav-dropdown" className="mr-sm-2">
        <ImageLoader />
      </NavDropdown> : <Register />}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
   );
}
 
export default NavBar;
