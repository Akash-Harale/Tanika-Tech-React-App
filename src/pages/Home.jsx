// import React, { useEffect, useState } from 'react';
// import './Home.css';

import { useEffect, useState } from "react"
import Footer from "./Footer"

// export default function Home  ()  {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       id: 1,
//       imgUrl: 'https://tanishq.interactiveavenues.net/tanishq/blog/wp-content/uploads/2022/09/Diwali-1920x768-1.jpg',
//       altText: 'Image 1',
//     },
//     {
//       id: 2,
//       imgUrl: 'https://www.grtjewels.com/asia/wp-content/uploads/2021/08/Homepage-Banner_1900-X-861-Pxl_1.jpg',
//       altText: 'Image 2',
//     },
//     {
//       id: 3,
//       imgUrl: 'https://www.gehnaindia.com/blog/wp-content/uploads/2018/01/5-Things-You-Must-Know-Before-You-Go-Jewellery-Shopping-For-Your-Big-Day.png',
//       altText: 'Image 3',
//     },
//     {
//       id:4,
//       imgUrl: "https://www.k4fashion.com/wp-content/uploads/2022/11/Pure-Traditional-Look-With-Glossy-Gold-Jewellery-bridal-jewellry-e1667282559960.jpg",
//       altText: "Image 4"
//     }
//   ];

//   const handlePrevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
//   };


//   // useEffect(()=>{
//   //   setInterval
//   // },[currentSlide])

//   return (
//     <div className="home-container">
//       <div className="slideshow-container">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`slide ${
//               index === currentSlide ? 'slide-active' : 'slide-inactive'
//             }`}
//           >
//             <img  src={slide.imgUrl} alt={slide.altText} />
//           </div>
//         ))}
//         <div className="prev" onClick={handlePrevSlide}>
//           &#10094;
//         </div>
//         <div className="next" onClick={handleNextSlide}>
//           &#10095;
//         </div>
//       </div>
//     </div>
//   );
// };

export default function Home(){

  const [count, setCount]= useState(0);

  // useEffect(()=>{

  //  setInterval(()=>{
  //    setCount((prev)=> prev=== data.length? setCount(0):   prev+1)
  //  }, 1000)

  // },[count])

const data=[
  {
          id: 1,
          imgUrl: 'https://tanishq.interactiveavenues.net/tanishq/blog/wp-content/uploads/2022/09/Diwali-1920x768-1.jpg',
          altText: 'Image 1',
        },
        {
          id: 2,
          imgUrl: 'https://www.grtjewels.com/asia/wp-content/uploads/2021/08/Homepage-Banner_1900-X-861-Pxl_1.jpg',
          altText: 'Image 2',
        },
        {
          id: 3,
          imgUrl: 'https://www.khazanajewellery.com/wp-content/uploads/2021/07/slider2.jpg',
          altText: 'Image 3',
        },
        {
          id:4,
          imgUrl: "https://sitaramjewellers.com/wp-content/uploads/2019/02/sitharam-silver-banner-1024x349.jpg",
          altText: "Image 4"
        }]

  return(
    <div>
      <div>
      {data.map((el)=>{
      return( 
          <img width="100%" src={el.imgUrl} alt="" />
        ) 
      })} 
    </div>
    
    </div>
  )
}