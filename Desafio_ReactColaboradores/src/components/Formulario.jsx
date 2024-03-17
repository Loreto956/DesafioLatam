import React, { useState } from 'react'
import Alert from './Alert';


const Formulario = ({agregarColaborador, setAlert}) => {
    const [formData, setFormData] = useState ({
    nombre:'',
    email:'',
    edad:'',
    cargo:'',
    telefono:'',
})
    
    const enviarFormulario = (e) => {
        e.preventDefault();
        if (!formData.nombre || !formData.email || !formData.edad || !formData.cargo || !formData.telefono) {
            setAlert({mensaje:'Todos los campos son Obligatorios', type:'danger'})
            setTimeout(() => {
                setAlert({mensaje:'', type:''})
            }, 2000)
            return;
        }
    
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailFormat.test(formData.email)) {
          setAlert({mensaje:'El formato del email es inválido', type:'danger'});
          return;
        }
    
    const edad = parseInt(formData.edad);
        if (edad < 18 || edad > 80) {
          setAlert({mensaje:'La edad debe estar entre 18 y 80 años', type:'danger'});
          return;
        }   
    
        const telefonoFormat = /^\d{8}$/;
        if (!telefonoFormat.test(formData.telefono)) {
          setAlert({mensaje:'El teléfono debe tener 8 dígitos', type:'danger'});
          return;  
        }
    
    const nuevoColaborador = {
        id: Date.now().toString(),
        ...formData,
    }

    agregarColaborador(nuevoColaborador);
    setFormData({
        nombre:'',
        email:'',
        edad:'',
        cargo:'',
        telefono:'',
    })

    setAlert({mensaje:'Colaborador agregado exitosamente', type:'success'});
    setTimeout(() => {
        setAlert({mensaje:'', type:''})
    }, 2000)
};

const handleChange = (e) => {
    const {name, value} = e.target; 
    setFormData({...formData, [name]: value})
}


  return (
    <>
    <form onSubmit={enviarFormulario} className='container'>
        <div className='form-group mb-3'>
            <input type='text'
                    name='nombre'
                    placeholder='Nombre del colaborador'
                    className='form-control'
                    onChange={handleChange}
                    value={formData.nombre}
            />
        </div>
        <div className='form-group mb-3'>
            <input type='email'
                name='email'
                placeholder='Email del colaborador'
                className='form-control'
                onChange={handleChange}
                value={formData.email}
            />
        </div>
        <div className='form-group mb-3'>
            <input type='number'
                name='edad'
                placeholder='Edad del colaborador'
                className='form-control'
                onChange={handleChange}
                value={formData.edad}
            />
        </div>
        <div className='form-group mb-3'>
            <input type='text'
                name='cargo'
                placeholder='Cargo de colaborador'
                className='form-control'
                onChange={handleChange}
                value={formData.cargo}
            />
        </div>
        <div className='form-group mb-3'>
            <input type='tel'
                name='telefono'
                placeholder='Fono 12345678'
                className='form-control'
                onChange={handleChange}
                value={formData.telefono}
            />
        </div>
        <button type='submit' className='btn btn-primary'>Agregar colaborador</button>
    </form>
    </>
  )
  }

export default Formulario