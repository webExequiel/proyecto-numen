import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBar = () => {

    const [viandas, setViandas] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    // const [tablaViandas, setTablaViandas] = useState([]);

  
    const peticionGet = async () => {
      await axios.get('http://localhost:5000')
      .then(response=>{
        setViandas(response);
        // setTablaViandas(response.data);
      }).catch(error=>{
        console.log(error);
      })
      }

      useEffect(()=>{
        peticionGet();
      },[]);
  
    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
  
      }
  
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda=tablaViandas.filter((viandas) => {
          if (viandas.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
            return viandas;
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

        {/* <div className='table-responsive'>
            <table className='table table-sm table-bordered'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>PRECIO</th>
                    <th>DESCRIPCION</th>
                    </tr>
                </thead>

                <tbody>
                    {Viandas &&
                    Viandas.map((Viandas) =>(
                    <tr key={Viandas.id}>
                        <td>{Viandas.id}</td>
                        <td>{Viandas.nombre}</td>
                        <td>{Viandas.precio}</td>
                        <td>{Viandas.descripcion}</td>
                    </tr>
                    ))}
                </tbody>

            </table>
        </div> */}
    </div>

  )
}

export default SearchBar