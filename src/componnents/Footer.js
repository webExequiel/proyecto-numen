import React from "react";
import styled from "styled-components";
import Vegan from '../assets/img/logon1.png';
import Visa from '../imagenes/visa.jpg'
import  Mastercard    from '../imagenes/logo-mastercard-cabecera-tw.jpg'
import   Cabal   from '../imagenes/cabal.png'
import    Naranja  from '../imagenes/tarjeta naranja.png'
import    Dinner  from '../imagenes/Diners-Club-International-logo.jpg'
import    Shopping  from '../imagenes/shopping.png'
import  American    from '../imagenes/american.png'
import   MerPag   from '../imagenes/logo-mercadopago.jpg'



const Body = styled.div`

padding: 50px 0 0 0;
background-color:#357401  ;


      `

const IMG = styled.img`
width:170px;
height: 170px;
margin-left : 35px;


`
const Controw = styled.div`
  display: flex ;
  flex-wrap : wrap ;



`
const Redes = styled.ul`
display:flex ;
`
const Img = styled.img`
width:60px ;
heigth: 70px;
`
const H4 = styled.h4`
font-size :22px;
color: #ffffff :
text-transform:capitalize;
margin-bottom: 30px;
font-weight: 500;
position:relative;
font-family: 'Hammersmith One', sans-serif;
&:before{
  content: '';
  position:absolute;
  left:5;
  bottom: -10px;
  background-color:#F88C80;
  height: 2px;
  box-sizing: border-box;
  width: 60px;
  }
`
const A =styled.a`
font-size: 30px ;
font-family: ${props => props.theme.fonts.titleFont};
text-transform:capitalize ;
color: #ffffff;
text-decoration:none;
font-weight:300;
color:#bbbbbb;
display:block;
&:hover{
  color:yellow;
  padding-left:3px;
}
`
const List = styled.ul`
list-style:none;
text-align: center ;
margin: 0  50px 30px 0 ;
`
const Contlinks = styled.div`
margin-left: 100px;
display:flex;
justify-content:center ;
`
const Listfooter =styled.div`
text-align : center ;


`
const MetPag = styled.div`
padding: 50px 0 0 0;
display:flex;


`
const Tarjetas = styled.div`

margin-left: 30px;

`
const Copy =styled.div`

font-size :22px;
color: #ffffff :
text-transform:capitalize;
margin-bottom: 30px;
font-weight: 500;
position:relative;
font-family: 'Hammersmith One', sans-serif;



`





const Footer = () => {
    return (
      
      <footer>
        <Body>
      
      
      <Controw >
       
          <div className="Logo">
          <IMG src={Vegan} />
        </div>

        
        
        <Contlinks>
       
                  <Listfooter className="footer-links">
                  <H4>Nosotros</H4>
                    <List>
                    <li><A href="">¿Quienes somos?</A></li>
                    <li><A href="">¿Como funciona?</A></li>
                    <li><A href="">Nuestra historia</A></li>
                    </List>
                  </Listfooter>
                  <Listfooter className="Footercol">
                <H4>Contacto</H4>
                  <List>
                    <li><A href="">+541178889032</A></li>
                    <li><A href="">Vegan-Food@gmail.com</A></li>
                    <li><A href="">Flores, Buenos Aires</A></li>
                    </List>
                  </Listfooter>

                 
                
           
      
    
        <Listfooter className="App">
        <H4> Sigamos conectados</H4>
        <Redes>
        <li><a></a></li>
            
            
          </Redes>
      </Listfooter>
      </Contlinks>
     
   
   </Controw>
  
   

        
        
        
        <MetPag className="metodo-pago">

        <div className="met">
        <h2 className="estilomet"><h2>Metodo de pago</h2></h2>
        </div>
        <Tarjetas className="img">
          <Img src={Visa}></Img>
          <Img src={Mastercard}></Img>
          <Img src={American}></Img>
          <Img src={Naranja}></Img>
          <Img src={Dinner}></Img>
          <Img src={Shopping}></Img>
          <Img src={Cabal}></Img>
          <Img src={MerPag}></Img>
          </Tarjetas>

          
          
        </MetPag>

       



        <hr></hr>
        <div className="copyright">
        <div className="sb_footer-below">
                  <div className="sb_footer-copyright">
                  <Copy>
                    Vegan Food@{new Date().getFullYear()}|
                    Todos los derechos reservados.
                   </Copy>
                  </div>
                 
                 </div>
          
          </div>
          </Body>
    </footer>



















        
    )
      
 
  };
  
  
  
  export default Footer;