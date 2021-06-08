import React from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { newUser } from '../features/counter/userSlice';
import { setDownloaded } from '../features/counter/imagesSlice';

const Logout = () => {

  const dispatch = useDispatch()

  return ( 
    <>
      <Nav.Link onClick={() => {
        dispatch(newUser(''))
        localStorage.removeItem('user')
        localStorage.removeItem('userName')
        dispatch(setDownloaded(false))
      }}>Выйти</Nav.Link>
    </>
   );
}
 
export default Logout;
