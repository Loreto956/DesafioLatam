import React, { useState } from 'react'

const Listado = ({colaboradores, eliminarColaborador}) => {
  const handleEliminarColaborador = (index) => {
    eliminarColaborador(index)
  }

  return (
    <div className='container mt-3'>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador, index) => (
          <tr key={index + 1}>
            <td>{index + 1}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.email}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td><button
                className='btn btn-outline-danger btn-sm'
                onClick={() => handleEliminarColaborador(index)}>
                Eliminar  
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Listado