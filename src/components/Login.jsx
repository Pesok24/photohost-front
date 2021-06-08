import React, { useState } from 'react';
import { Modal, Button, Nav, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { newUser, newUserName } from '../features/counter/userSlice';


const Login = () => {

  const [show, setShow] = useState(false);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [exist, setExist] = useState(true)

  const dispatch = useDispatch()

// asf

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const doFetch = async () => {
    // const url = '/login';
    const url = 'https://photohost-server.herokuapp.com/login';
    const data = { name: name, password: password }; 
try {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const json = await response.json();
  console.log(json);
  
  if (json.user) {
    localStorage.setItem('user', json.user)
    localStorage.setItem('userName', json.userName)
    dispatch(newUser(json.user))
    dispatch(newUserName(json.userName))
    setExist(true)
    handleClose()
  }
  if(!json.user) {
    setExist(false)
  }
// console.log('Успех:', JSON.stringify(json));
} catch (error) {
  console.error('Ошибка:', error);
}
}
  
  
  return ( 
    <>
          {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Nav.Link variant="primary" onClick={handleShow}>Вход</Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Введите данные:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group>
    <Form.Label>Ваш ник:</Form.Label>
    <Form.Control type="text" placeholder="Введите ник" onChange={(e) => {
      setName(e.target.value)
    }}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Введите пароль:</Form.Label>
    <Form.Control type="password" placeholder="Пароль" onChange={(e) => {
      setPassword(e.target.value)
    }}/>
  </Form.Group>
  {exist ? '' : <Form.Text className='checkText'>
      Неверные данные!
    </Form.Text>}
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Выйти
          </Button>
          <Button variant="primary" onClick={() => {
            doFetch()
          }}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
      </>
   );
}
 
export default Login;
