import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss'

const settings = {
  
  dots: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};
export const Carousel = ({imagesArray,project}) => {  
  
 
  return (
    <Box sx={{      
      width: '80%',   
      '& .slick-prev, & .slick-next': {
        color: '#c1c1c1',
        zIndex: 1,
      },
      '& .slick-prev::before, & .slick-next::before': {
        color: '#c1c1c1', 
        //fontSize: '40px',
      },
    }}>
      <Slider {...settings} >
        {imagesArray.map((image, index) => (
          <Box key={index} >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={project}             
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};


