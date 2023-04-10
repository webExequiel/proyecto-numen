import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	return (
		<Formik
			initialValues={{
				usuario: '',
				contraseña: '',
			}}
			validate={(valores) => {
				let errores = {};

				// Validacion nombre
				if(!valores.usuario) {
					errores.usuario = 'Por favor ingrese su usuario'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.usuario)) {
					errores.usuario = 'El usuario solo puede contener letras y espacios'
				}
				//Validacion correo
				if(!valores.contraseña) {
					errores.contraseña = 'Porfavor ingrese su contraseña'
				} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.contraseña)) {
					errores.contraseña = 'La contraseña solo puede contener letras, numeros, puntos, guines'
				}

				return errores;

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
						<label htmlFor="usuario">Usuario</label>
						<Field
							type="text"
							id="usuario"
							name="usuario"
							placeholder="usuario"
							
						/>
						<ErrorMessage name="usuario" component={() => (
							<div className="error">{errors.usuario}</div>
						)} />
					</div>
					<div>
						<label htmlFor="contraseña">Contraseña</label>
						<Field
							type="text"
							name="contraseña"
							placeholder="contraseña"
							id="contraseña"						
						/>
						<ErrorMessage name="contraseña" component={() => (
							<div className="error">{errors.contraseña}</div>
						)} />
					</div>

					<div>
						<label>
							<Field type="radio" name="sexo" value="hombre"/> Hombre
							</label>
						<label>
							<Field type="radio" name="sexo" value="mujer"/> Mujer
							</label>
					</div>

					<button type="submit">Enviar</button>
					{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
				</Form>

			)}
		</Formik>
	);
}
 
export default Formulario;