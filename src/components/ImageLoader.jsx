import React, { useState } from "react";
import FileInputComponent from "react-file-input-previews-base64";
import { Modal, Button, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { pushImage } from "../features/counter/imagesSlice";
import LoaderSpiner from "./LoaderSpiner";
import { newImage, setIsEmpty, setDownloaded } from "../features/counter/imagesSlice";


const ImageLoader = () => {

  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState('')
  const [imageName, setImageName] = useState('');
  const [showSpin, setShowSpin] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  let user = useSelector( state => state.user.name )


  const imageLoadFunc = async () => {
    dispatch(setDownloaded(false))
    // const url = '/images';
    const url = 'https://photohost-server.herokuapp.com/images';
    const data = { author: user }; 
try {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  console.log('массив картинок', json)
  dispatch(newImage(json.array))
  // setIsEmpty(json.empty)
  dispatch(setIsEmpty(json.empty))
  dispatch(setDownloaded(true))
} catch (error) {
  console.error('Ошибка:', error);
}
} 

  

  const doFetch = async () => {
    const url = 'https://photohost-server.herokuapp.com/upload';
    const data = { author: user, src: imageSrc, name: imageName }; 
try {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  setShowSpin(json.done)
  console.log(json);
  
// console.log('Успех:', JSON.stringify(json));
} catch (error) {
  console.error('Ошибка:', error);
}
}



  return (
    <>
       <NavDropdown.Item variant="primary" onClick={handleShow}>
        Загрузить фото
      </NavDropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Загрузите фото:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FileInputComponent
            labelText="Выберите файл"
            labelStyle={{ fontSize: 14 }}
            multiple={false}
            callbackFunction={(file_arr) => {
              // setImageSrc(file_arr[0].base64)
              // setImageName(file_arr[0].name)
              setImageSrc(file_arr.base64)
              setImageName(file_arr.name)
            }}
            accept="image/*"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Выйти
          </Button>
          <Button onClick={ async () => {
            dispatch(pushImage({
              name: imageName,
              src: imageSrc
             }))
             handleClose()
             setShowSpin(false)
             await doFetch()
             imageLoadFunc()
          }}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
      {showSpin ? '' : <LoaderSpiner />}
    </>
  );
};

export default ImageLoader;
