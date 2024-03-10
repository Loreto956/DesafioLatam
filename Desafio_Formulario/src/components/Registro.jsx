import React, { useState } from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
import Alert from './Alert'

const Registro = () => {
    const [mensaje, setMensaje] = useState('');
    const [tipoMensaje, setTipoMensaje] = useState('')
    const [socialButtonsEnabled, setSocialButtonsEnabled] = useState(true);

    const handleFormSubmit = (formData) => {
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
           setMensaje('Todos los campos son obligatorios');
           setTipoMensaje('danger');
        } else if (!isValidEmail(formData.email)) {
            setMensaje('Formato de email invalido');
            setTipoMensaje('danger');
        } else if (formData.password !== formData.confirmPassword) {
            setMensaje('Las contraseñas no coinciden');
            setTipoMensaje('danger');
        } else {
            setMensaje('Registro exitoso');
            setTipoMensaje('success')
        }
    }
    
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSocialButtonClick = (provider) => {
        console.log(`Clicked on ${provider}`);
      };

  return (
    <div>
        <h1>Crea una cuenta</h1>
        <SocialButton icons={['facebook','linkedin','github']} onClick={handleSocialButtonClick} />
        <p>o usa tu email para registrarte</p>
        <Formulario onSubmit={handleFormSubmit} />
        <Alert message={mensaje} type={tipoMensaje}/>
    </div>
  )
}

export default Registro
