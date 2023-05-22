import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ viandas, setViandasFiltradas }) => {

  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const resultadosBusqueda = viandas.filter((viandas) => {
      if (viandas.name.toString().toLowerCase().includes(busqueda.toLowerCase())) {
        return viandas
      }
    })
    setViandasFiltradas(resultadosBusqueda);
  }, [busqueda, viandas])

  const handleChange = e => {
    setBusqueda(e.target.value);
  }

  return (
    <div className='containerInput'>
      <input
        className='form-control inputBuscar'
        value={busqueda}
        placeholder='busqueda por nombre'
        onChange={handleChange}
      />
    </div>

  )
}

export default SearchBar