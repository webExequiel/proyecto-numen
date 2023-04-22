
import React, {useState} from 'react';
import { Formik, Form, Field } from "formik";
import styled from 'styled-components';

const FormLogin = () => {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <Formik
    initialValues={{
        nombre: '',
        apellido:'',
        correoelectrónico: '',
		mensaje: '',
    }}

        onSubmit={(valores, {resetForm}) => {	
        resetForm();		
        console.log('formulario enviado');
        cambiarFormularioEnviado(true);
        setTimeout(() => cambiarFormularioEnviado(false), 5000)                                                    
		}}                                                    
		>
		{( {errors} ) => (
			<Form className='formulario'>
                <div>
                    <h3>ENVIE SU CONSULTA</h3>
                </div>
				<div>
					<label htmlFor="nombre">Nombre</label>
					<Field
						type="text"
						id="nombre"
						name="nombre"
						placeholder="nombre"
							
					/>
				</div>
				<div>
					<label htmlFor="apellido">Apellido</label>
					<Field
						type="text"
						name="apellido"
						placeholder="apellido"
						id="apellido"						
					/>
				</div>
                <div>
					<label htmlFor="correo electrónico">Correo Electrónico</label>
					<Field
						type="text"
						id="correo electrónico"
						name="correoelectrónico"
						placeholder="correo electrónico"
							
					/>
				</div>
				<div>
					<label htmlFor="mensaje">Mensaje</label>
					<Field 
						type="text"
						id="mensaje"
						name="mensaje" 
						as="textarea" 
						placeholder="Mensaje" 
					/>
				</div>

				<button type="submit">ENVIAR FORMULARIO</button>
				{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
			</Form>

		)}
	</Formik>
    );
}

export default FormLogin