import React, { useState } from 'react';
import { Modal, Button, Nav, Form } from 'react-bootstrap';

const Register = () => {

  const [show, setShow] = useState(false);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordSec, setPasswordSec] = useState('')
  const [check, setCheck] = useState(false)
  const [exist, setExist] = useState(true)




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const doFetch = async () => {
    const url = 'https://photohost-server.herokuapp.com/register';
    const data = { name: name, password: password, passwordSec: passwordSec }; 
try {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  setExist(json.status)
  if (json.status) {
    handleClose()
  }
  console.log('Успех:', json);
} catch (error) {
  console.error('Ошибка:', error);
}
  }
  
  
  return ( 
    <>
          {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Nav.Link variant="primary" onClick={handleShow}>Регистрация</Nav.Link>

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

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Введите пароль для очистки всех данных:</Form.Label>
    <Form.Control type="password" placeholder="Пароль" onChange={(e) => {
      setPasswordSec(e.target.value)
    }}/>
    <Form.Text className="text-muted">
      Примините этот пароль, когда вам нужно незаметно удалить все свои фотографии
    </Form.Text>
  </Form.Group>
    {check ? <Form.Text className='checkText'>
      Обычный пароль и пароль для удаления данных должны отличаться!
    </Form.Text> : ''}
    {exist ? '' : <Form.Text className='checkText'>
      Такой пользователь уже существует!
    </Form.Text>}
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Выйти
          </Button>
          <Button variant="primary" onClick={ async () => {
            if (password === passwordSec) {
              setCheck(true)
            }
            else {
            doFetch()
            }
          }}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
      </>
   );
}
 
export default Register;
