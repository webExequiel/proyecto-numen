import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
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
		>	
			{( {errors} ) => (
				<Form className='formulario'>
					<div>
						<h3>INGRESAR</h3>
					</div>
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
							type="password"
							name="contraseña"
							placeholder="password"
							id="password"						
						/>
						<ErrorMessage name="contraseña" component={() => (
							<div className="error">{errors.contraseña}</div>
						)} />
					</div>
					<div>
						<button>Registrarse</button>
					</div>

					<button type="submit">INGRESAR</button>
				</Form>

			)}
		</Formik>
	);
}
 
export default Formulario;