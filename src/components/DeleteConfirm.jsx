// import React, { useState } from 'react';
// import { Modal, Spinner, Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { newImage, setDownloaded, setIsEmpty } from '../features/counter/imagesSlice';

// const DeleteConfirm = () => {
  
//   let user = useSelector( state => state.user.name )
//   const [show, setShow] = useState(true);
//   const dispatch = useDispatch()
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


//   const doFetch = async () => {
//     // const url = '/images';
//     const url = 'https://photohost-server.herokuapp.com/images';
//     const data = { author: user }; 
// try {
//   const response = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const json = await response.json();
//   console.log('массив картинок', json)
//   dispatch(newImage(json.array))
//   // setIsEmpty(json.empty)
//   dispatch(setIsEmpty(json.empty))
//   dispatch(setDownloaded(true))
// } catch (error) {
//   console.error('Ошибка:', error);
// }
// } 
  
//   return ( 
//     <>
//       <Modal show={show} onClick={handleShow}>
//         <Modal.Header closeButton>
//           <Modal.Title>Действительно хотите удалить?<div className=""></div></Modal.Title>
//         </Modal.Header>
//         {/* <Modal.Body>
//         <Spinner animation="border" variant="primary" className='spiner'/>
//         </Modal.Body> */}
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Нет
//           </Button>
//           <Button onClick={ async () => {
//                       const doFetchDelete = async () => {
//                         const url = 'https://photohost-server.herokuapp.com/delete';
//                         const data = { id: e._id }; 
//                     try {
//                       const response = await fetch(url, {
//                         method: 'POST',
//                         body: JSON.stringify(data),
//                         headers: {
//                           'Content-Type': 'application/json'
//                         }
//                       });
//                       const json = await response.json();
//                       console.log(json);
//                       dispatch(setDownloaded(false))
//                     } catch (error) {
//                       console.error('Ошибка:', error);
//                     }
//                   }
//                   await doFetchDelete()
//                   doFetch()
//           }}>
//             Да
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//    );
// }
 
// export default DeleteConfirm;
