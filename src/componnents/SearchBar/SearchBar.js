import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBar = () => {

    const [viandas, setViandas] = useState([])
    const [busqueda, setBusqueda] = useState('')

  
    const peticionGet = async () => {
      const response = await axios.get('http://localhost:5000/viandas')
      console.log(response.data)
      setViandas(response.data)
    }



      useEffect(()=>{
        peticionGet();
      },[]);
  
    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
  
      }
  
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = viandas.filter((viandas) => {
          if (viandas.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
            return viandas
          }
        }) 
          setViandas(resultadosBusqueda);
      }

  return (
    <div>
        <div className='containerInput'>
            <input
            className='form-control inputBuscar'
            value={busqueda}
            placeholder='busqueda por nombre'
            onChange={handleChange}

            />
        </div>
    </div>

  )
}

export default SearchBar