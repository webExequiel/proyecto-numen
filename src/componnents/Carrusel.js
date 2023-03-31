import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


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
        <div className="burger"><h4>1</h4>
          <img className="imagenBurger" src= {require ("../imagenes/burger.jpg")} alt= "burger"/>
        </div>
        <div className="empanadas"><h4>2</h4>
          <img className="imagenEmpanadas" src= {require ("../imagenes/empanadas.jpg")} alt= "empanadas"/>
        </div>
        <div className="grillados"><h4>3</h4>
          <img className="imagenGrillados" src= {require ("../imagenes/grillados.jpg")} alt= "vegetales_grillados"/>
        </div>
        <div className="ensalada"><h4>4</h4>
          <img className="imagenEnsalada" src= {require ("../imagenes/ensaladaFrutas.jpg")} alt= "ensalada_frutas"/>
        </div>
        <div className="barraCereal"><h4>5</h4>
          <img className="imagenBarraCereal" src= {require ("../imagenes/barraCereal.jpg")} alt= "barra_de_cereal"/>
        </div>
        <div className="hamburgesa"><h4>6</h4>
          <img className="imagenHamburgesa" src= {require ("../imagenes/hamburger.jpg")} alt= "hamburgesa"/>
        </div>
        <div className="Pasta"><h4>7</h4>
          <img className="imagenPasta" src= {require ("../imagenes/pasta.jpg")} alt= "pasta_vegetal"/>
        </div>
        <div className="pizzaVerde"><h4>8</h4>
          <img className="imagenPizza" src= {require ("../imagenes/pizzaVerde.jpg")} alt= "pizza_verde"/>
        </div>
        <div className="rollVegano"><h4>9</h4>
          <img className="imagenRollVegano" src= {require ("../imagenes/rollVegano.jpg")} alt= "roll_vegano"/>
        </div>
        <div className="Jugos"><h4>10</h4>
          <img className="imagenJugos" src= {require ("../imagenes/jugos.jpg")} alt= "jugos"/>
        </div>
      </OwlCarousel>
    );
  }
  
  
  export default CarruselComidas;
  