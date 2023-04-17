import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../App.css';

const images = [
    'burger',  
    'empanadas', 
    'grillados', 
    'ensaladaFrutas', 
    'barraCereal', 
    'hamburger',
    'pasta',
    'pizzaVerde',
    'rollVegano',
    'jugos'
]
    const options = {
    items: 5,
    nav: false,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autowidth: true,
    mergeFit: true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
      }
};

  function CarruselComidas () {
    return (
      <OwlCarousel className="owl-theme" {...options}>
        {images.map((image, index) => (
            <div className={image}><h4>{index + 1}</h4>
                <img className={`imagen${image}`} src= {require (`../imagenes/${image}.jpg`)} alt={image}/>
            </div>
        ))}
      
      </OwlCarousel>
    );
  }
  
  
  export default CarruselComidas;
  