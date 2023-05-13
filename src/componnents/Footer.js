import React from "react";
import styled from "styled-components";
import Vegan from '../assets/img/logon1.png';

const Contpri= styled.div`
      margin:0;
      padding:0;
      box-sizing:border-box;
      `







const Footer = () => {
    return (
      
      <Contpri className="App">
      <footer>
      <div >
        <div className="respon" >
         <div className="App">
          <div className="Logo">
          <img src={Vegan} />
        </div>

        
        
        
        <div className = "footer">
            <div className="contenedor">
              <div >
                  <div className="footer-links">
                  <h4>Nosotros</h4>
                    <ul>
                    <li><a href="">¿Quienes somos?</a></li>
                    <li><a href="">¿Como funciona?</a></li>
                    <li><a href="">Nuestra historia</a></li>
                    </ul>
                  </div>
                  <div className="Footercol">
                <h4>Contacto</h4>
                  <ul>
                    <li><a href="">+541178889032</a></li>
                    <li><a href="">Vegan-Food@gmail.com</a></li>
                    <li><a href="">Flores, Buenos Aires</a></li>
                    </ul>
                  </div>
                </div>
            </div>
      </div>
      <section>
        <div className="App">
        <div className="App-n"></div>
        <div className="App-y"></div>
        <h4> Sigamos conectados</h4>
        <ul>
            <li><a> </a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            
          </ul>
      </div>
      </section>
   </div>
</div>
        
        
        
        <div className="metodo-pago">
          
          
        </div>
        <hr></hr>
        <div className="copyright">
          
          </div>
          </div>
        </footer>



















        </Contpri>
    )
      
 
  };
  
  
  
  export default Footer;