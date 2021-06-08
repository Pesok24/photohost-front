// import { useDispatch, useSelector } from "react-redux";
// import { newImage, setIsEmpty, setDownloaded } from "./features/counter/imagesSlice";

// let user = useSelector( state => state.user.name )


// const dispatch = useDispatch()

//   const imageLoadFunc = async () => {
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

// export default imageLoadFunc
