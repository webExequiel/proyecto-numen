import React from 'react';
import Button from './Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    
    <div>

      <Button icon={faSearch} />

    </div>

  )
}

export default Search


// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const [elementos, setElementos] = useState([]);
//   const [tablaElementos, setTablaElementos] = useState([]);
//   const [busqueda, setBusqueda] = useState('');

//   const peticionGet=async() => {
//     await axios.get('')
//     .then(response=>{
//       setElementos(response.data);
//       setTablaElementos(response.data);
//     }).catch(error=>{
//       console.log(error);
//     })
//     }

//   const handleChange=e=>{
//       setBusqueda(e.target.value);
//       filtrar(e.target.value);

//     }

//   const filtrar = (terminoBusqueda) => {
//       var resultadosBusqueda=tablaElementos.filter((elementos) => {
//         if (elementos.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
//           return elementos;
//         }
//       })
//       setElementos(resultadosBusqueda);
//     }
//   return (

//     <div>

//       <Button icon={faSearch} />

//       <div className='containerInput'>
//         <input
//           className='form-control inputBuscar'
//           value={busqueda}
//           placeholder='busqueda por nombre'
//           onChange={handleChange}

//         />
//       </div>

//       <div className='table-responsive'>
//         <table className='table table-sm table-bordered'>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>NOMBRE</th>
//               <th>PRECIO</th>
//               <th>DESCRIPCION</th>
//             </tr>
//           </thead>

//           <tbody>
//             {elementos &&
//             elementos.map((elementos) =>(
//               <tr key={elementos.id}>
//                 <td>{elementos.id}</td>
//                 <td>{elementos.nombre}</td>
//                 <td>{elementos.precio}</td>
//                 <td>{elementos.descripcion}</td>
//               </tr>
//               ))}
//           </tbody>

//         </table>

//       </div>
//     </div>