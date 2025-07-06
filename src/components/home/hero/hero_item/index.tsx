import React from 'react';
import { Carousel } from 'antd';

// const contentStyle: React.CSSProperties = {
//   height: '400px',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: 'white',
//   color:"black"
// };

const CarouselPart: React.FC = () => (
  <div className="container">
    <Carousel autoplay>
    <div className='pb-[30px]'>
        <div className=' carousel_item flex flex-col  pl-[100px] pb-[60px] pt-[40px]'>
            <h2 className=' carousel_h2 text-[15px]'>Welcome to GreenShop</h2>
            <h1 className='carousel_h1 text-[50px] font-extrabold w-[350px]'>Let’s Make a  
            Better <span className='text-green-500'>Planet</span></h1>
<p className='carousel_p'>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
<button className='bg-green-500 text-white px-4 py-2 rounded-md w-[150px] mt-[20px]'>Shop Now</button>
        </div>
    </div>
   
    <div>
        <div className=' carousel_item flex flex-col  pl-[100px] pb-[60px] pt-[40px]'>
            <h2 className=' carousel_h2 text-[15px]'>Welcome to GreenShop</h2>
            <h1 className='carousel_h1 text-[50px] font-extrabold w-[350px]'>Let’s Make a  
            Better <span className='text-green-500'>Planet</span></h1>
<p className='carousel_p'>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
<button className='bg-green-500 text-white px-4 py-2 rounded-md w-[150px] mt-[20px]'>Shop Now</button>
        </div>
    </div>

    <div>
        <div className=' carousel_item flex flex-col  pl-[100px] pb-[60px] pt-[40px]'>
            <h2 className=' carousel_h2 text-[15px]'>Welcome to GreenShop</h2>
            <h1 className='carousel_h1 text-[50px] font-extrabold w-[350px]'>Let’s Make a  
            Better <span className='text-green-500'>Planet</span></h1>
<p className='carousel_p'>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
<button className='bg-green-500 text-white px-4 py-2 rounded-md w-[150px] mt-[20px]'>Shop Now</button>
        </div>
    </div>
  </Carousel>
  </div>
);

export default CarouselPart;