import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="container mt-4">
      <h2>Contáctanos ¿En qué te podemos ayudar?</h2>
      {submitted ? (
        <div className="alert alert-success" role="alert">
         Gracias por contactarnos, le responderemos a la brevedad.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Correo
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              placeholder='name@example.com'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="messageInput" className="form-label">
              Descripción
            </label>
            <textarea
              className="form-control"
              id="messageInput"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Contacto;