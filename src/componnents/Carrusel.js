import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
    loop: true,
    nav: true,
    autoplay: true,
    //touchDrag: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  }
  function CarruselComidas () {
    return (
      <OwlCarousel className="owl-theme" {...options}>
        {images.map((image, index) => (
            <div className={image}><h4>{index + 1}</h4>
                <img className={`imagen${image}`} src= {require (`../imagenes/${image}.jpg`)} alt={image} />
            </div>
        ))}
      
      </OwlCarousel>
    );
  }
  
  
  export default CarruselComidas;
  