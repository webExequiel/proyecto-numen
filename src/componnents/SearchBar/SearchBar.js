import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CustomModal from '../modal/CustomModal';

const SearchBar = () => {

    const [viandas, setViandas] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [vianasFlitradas, setViandasFiltradas] = useState([]);

  
    const peticionGet = async () => {
      const response = await axios.get('http://localhost:5000/viandas')
      console.log(response.data)
      setViandas(response.data)
    }



      useEffect(()=>{
        peticionGet();
      },[]);

      useEffect(() =>{
        const resultadosBusqueda = viandas.filter((viandas) => {
          if (viandas.name.toString().toLowerCase().includes(busqueda.toLowerCase())){
            return viandas
          }
        }) 
          setViandasFiltradas(resultadosBusqueda);
      },[busqueda, viandas])
  
    const handleChange=e=>{
        setBusqueda(e.target.value);
      }
  
  console.log(vianasFlitradas);
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