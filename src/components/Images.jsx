import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newImage, setDownloaded, setIsEmpty } from '../features/counter/imagesSlice';
import { Card, Button, Spinner } from 'react-bootstrap';
import './ImagesStyle.css'

const Images = () => {

  let user = useSelector( state => state.user.name )
  let images = useSelector( state => state.image.array )
  let downloaded = useSelector( state => state.image.downloaded )
  let isEmpty = useSelector( state => state.image.isEmpty )

  // const [isEmpty, setIsEmpty] = useState()

  let dispatch = useDispatch()
  
  const doFetch = async () => {
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

  useEffect(() => {
if (user) {
  doFetch()
}
else {
  dispatch(newImage([]))
}
  }, [user])

  

  return (
    <div className='image-container'>
        {user ? !downloaded ? <Spinner animation="border" variant="primary" /> : isEmpty && images.length === 0 ? <div className='mainPageText'>У вас пока нет фотографий</div> : images.map((e) => {
      return (
      <div className='image-block'>
      <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={e.src} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Button variant="primary" className='image-button' onClick={ async () => { 

          const doFetchDelete = async () => {
            const url = 'https://photohost-server.herokuapp.com/delete';
            const data = { id: e._id }; 
        try {
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const json = await response.json();
          console.log(json);
          dispatch(setDownloaded(false))
        } catch (error) {
          console.error('Ошибка:', error);
        }
      }
      await doFetchDelete()
      doFetch()
        }}>Удалить</Button>
      </Card.Body>
    </Card>
    </div>
      )
    }) : <div className='mainPageText'>Авторизуйтесь</div> }
    </div>
  )
}
 
export default Images;


// Em5rWAeOmcfnKJzm
