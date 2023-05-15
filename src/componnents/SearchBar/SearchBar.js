import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () => {

    const [viandas, setViandas] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [viandasFiltradas, setViandasFiltradas] = useState([])

  
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

  // console.log(viandasFiltradas);
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

        <div className='table-responsive'>
          <table className='table table-sm table-bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {viandas &&
              viandas.map((viandas) =>(
                <tr key={viandas.id}>
                  <td>{viandas.id}</td>
                  <td>{viandas.name}</td>
                  <td>{viandas.price}</td>
                  <td>{viandas.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

  )
}

export default SearchBar