import React, { useState } from 'react';
import { Modal, Spinner } from 'react-bootstrap';


const LoaderSpiner = () => {

  const [show, setShow] = useState(true);
  
  
  return ( 
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Загрузка фото<div className=""></div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Spinner animation="border" variant="primary" className='spiner'/>
        </Modal.Body>
      </Modal>
    </>
   );
}
 
export default LoaderSpiner;
