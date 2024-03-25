import React, { useState } from 'react';

const Buscador = ({ handleFilter, handleSort }) => {
  const [filtro, setFiltro] = useState('');
  const [orden, setOrden] = useState('');

  const handleChangeFiltro = (e) => {
    const { value } = e.target;
    setFiltro(value);
    handleFilter(value);
  };

  const handleChangeOrden = (e) => {
    const { value } = e.target;
    setOrden(value);
    handleSort(value);
  };

  return (
    <div>
      <input className='m-3'
        type="text"
        placeholder="Filtrar por nombre o motivo"
        value={filtro}
        onChange={handleChangeFiltro}
      />
      <select className='m-3' value={orden} onChange={handleChangeOrden}>
        <option value="">Ordenar por...</option>
        <option value="asc">Fecha ascendente</option>
        <option value="desc">Fecha descendente</option>
      </select>
    </div>
  );
};

export default Buscador;
