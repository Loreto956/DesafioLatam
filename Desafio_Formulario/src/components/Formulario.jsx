import React from 'react'
import { useState } from 'react'

const Formulario = ({onSubmit}) => {
    const [formData, setFormData] = useState ({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
  
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]: value});
    };

    const validarDatos = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };
  
    return (
    <div>
      <form className='formulario' onSubmit={validarDatos}>
        <div className='form-group mb-3'>
            <input
                type='text'
                name='name'
                placeholder='nombre'
                className='form-control'
                onChange={handleInputChange}
                value={formData.name}
            />
        </div>
        <div className='form-group mb-3'>
            <input 
                type="email"
                name='email'
                placeholder='tuemail@correo.com'
                className='form-control'
                onChange={handleInputChange}
                value={formData.email}
            />
        </div>  
        <div className='form-group mb-3'>
            <input
                type='password'
                name='password'
                placeholder='password'
                className='form-control'
                onChange={handleInputChange}
                value={formData.password}
            />
        </div>
        <div className='form-group mb-3'>
            <input
                type='password'
                name='confirmPassword'
                placeholder='confirmación password'
                className='form-control'
                onChange={handleInputChange}
                value={formData.confirmPassword}
            />
        </div>
        <div className='d-grid gap-2'>
            <button type='submit' className='btn btn-success'>
                Registrarse
            </button>
        </div>
      </form>
    </div>
  )
}

export default Formulario
