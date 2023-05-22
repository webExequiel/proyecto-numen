import React from "react";
import "./footer.css";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

 


/*Fondo del Footer */
const Body = styled.div`
padding: 50px 0 0 0;
background-color:#357401  ;
`
/*Estilo del Logo */
const IMG = styled.img`
width:170px;
height: 170px;
margin-left : 35px;
`
/*Contenedor principal logo,links,redes*/ 
const Controw = styled.div`
  display: flex ;
  flex-wrap : wrap ;
  margin-left : 30px;
  `
  /*Contenedor principal de Redes Sociales */
const Redes = styled.ul`
display:flex ;
`
/*Imagen de las Tarjetas */
const Img = styled.img `

 height:50px;
 width:110px;
`
/* Titulos de los links */
const H4 = styled.h4`
font-size :22px;
color: #ffffff :
text-transform:capitalize;
margin-bottom: 30px;
font-weight: 500;
position:relative;
font-family: 'Hammersmith One', sans-serif;
box-shadow : 2px;
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
/* Links*/
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
/*Lista de los links */
const List = styled.ul`
list-style:none;
text-align: center ;
margin: 0  50px 30px 0 ;
`
/*Contenedor general de los links */
const Contlinks = styled.div`
margin-left: 100px;
display:flex;
justify-content:center ;
`
/*Contenedor de nosotros , contacto */
const Listfooter =styled.div`
text-align : center ;
`
/*Contenedor de Metodo de pago */
const MetPag = styled.div`
padding: 50px 0 0 0;
display:flex;
flex-direction: column;
`
/*Contenedor de las tarjetas */
const Tarjetas = styled.div`
margin-left: 30px;
display: flex;
justify-content: center;
`
/*Contenedor Derechos reservados */
const Copy =styled.div`
font-size :30px;
color: #ffffff :
text-transform:capitalize;
margin-bottom: 30px;
font-weight: 500;
position:relative;
font-family: ${props => props.theme.fonts.titleFont};
display:flex ;
justify-content: center ;
`
/*Links de las Redes Sociales */
const A2 = styled.a`

position: relative;
width: 60px;
height: 60px;
display: inline-block;
border-radius: 10px;
display : flex;
justify-content: center;
align-items: center;
text-decoration: none;
color:#25C306;
border-color: #fff;
font-size: 2em;

border-right: 1px solid rgba (255,255,255, .2);
border-bottom: 1px solid rgba (255,255,255, .2);
box-shadow: 0 5px 45px rgba (0,0,0, .1);
backdrop-filter : blur(2px);
transition : .5s;
overflow: hidden;
margin-left: 15px;
&:hover{
  color:#357401;
  background-color: yellow;
}

`
/*Titulo del Metodo de pago */
const TituloPago = styled.div`
display:flex ;
justify-content: center ;




`
const Footer = () => {
    return (
      <footer>
        <Body className="body">
          <Controw className="respond" >
       
          <div className="Logo">
          <IMG src={Vegan} />
        
        </div>
             <Contlinks className="footer-links">
       
                  <Listfooter className="">
                  <H4 className="h4">Nosotros</H4>
                    <List>
                    <li><A href="">¿Quienes somos?</A></li>
                    <li><A href="">¿Como funciona?</A></li>
                    <li><A  href="">Nuestra historia</A></li>
                    </List>
                  </Listfooter>
                  <Listfooter className="">
                <H4 className="h4">Contacto</H4>
                  <List>
                    <li><A href="">+541178889032</A></li>
                    <li><A href="">Vegan-Food@gmail.com</A></li>
                    <li><A href="">Flores, Buenos Aires</A></li>
                    </List>
                  </Listfooter>
       <Listfooter>
        <H4 className="h4"> Sigamos conectados</H4>
        <Redes className="Redes">
          <A2 href=""><FontAwesomeIcon icon= {faFacebook}/></A2>
          <A2 href=""><FontAwesomeIcon icon= {faTwitter}/></A2>
          <A2 href=""><FontAwesomeIcon icon= {faInstagram}/></A2>
          <A2 href=""><FontAwesomeIcon icon= {faLinkedin}/></A2>
             </Redes>
      </Listfooter>
      </Contlinks>
     </Controw>
  
  <MetPag className="metodo-pago">

        <TituloPago className="met">
        <h2 className="estilomet"><h2>Metodo de pago</h2></h2>
        </TituloPago>
        <Tarjetas className="img">
          <Img className="estilo-tarjeta"src={Visa}/>
          <Img className="estilo-tarjeta"src={Mastercard}></Img>
          <Img className="estilo-tarjeta"src={American}></Img>
          <Img className="estilo-tarjeta"src={Naranja}></Img>
          <Img className="estilo-tarjeta"src={Dinner}></Img>
          <Img className="estilo-tarjeta"src={Shopping}></Img>
          <Img className="estilo-tarjeta"src={Cabal}></Img>
          <Img className="estilo-tarjeta"src={MerPag}></Img>
          </Tarjetas>

          
          
        </MetPag>

       



        <hr></hr>
        <div className="copyright">
        <div className="sb_footer-below">
                  <div className="sb">
                  <Copy className="sb_footer-copyright">
                    Vegan Food@{new Date().getFullYear()}|
                    Todos los derechos reservados.
                   </Copy>
                  </div>
                 
                 </div>
          
          </div>
          </Body>
    </footer>
) };
  
  
  
  export default Footer;