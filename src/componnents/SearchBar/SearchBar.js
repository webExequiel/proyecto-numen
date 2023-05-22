import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ viandas, setViandasFiltradas }) => {

  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const resultadosBusqueda = viandas.filter((vianda) => {
      return vianda.name.toLowerCase().includes(busqueda.toLowerCase());
    })
    setViandasFiltradas(resultadosBusqueda);
  }, [busqueda, viandas, setViandasFiltradas])

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