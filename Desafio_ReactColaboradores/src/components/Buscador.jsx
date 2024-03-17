import React, { useState } from 'react';

const Buscador = ({ colaboradores, setColaboradoresFiltrados }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusqueda = (e) => {
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return Object.values(colaborador).some((campo) =>
        campo.toLowerCase().includes(valor)
      );
    });
    setColaboradoresFiltrados(colaboradoresFiltrados);
  };

  return (
    <div className='container mt-3'>
      <input
        type='text'
        className='form-control'
        placeholder='Buscar colaborador...'
        value={busqueda}
        onChange={handleBusqueda}
      />
    </div>
  )
}

export default Buscador
