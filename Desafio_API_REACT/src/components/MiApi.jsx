import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';

const MiApi = () => {
  const [feriados, setFeriados] = useState([]);
  const [filteredFeriados, setFilteredFeriados] = useState([]);
  const [orden, setOrden] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.feriadosapp.com/api/holidays-2019.json');
        const data = await response.json();
        setFeriados(data.data);
        setFilteredFeriados(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (filterValue) => {
    const filteredData = feriados.filter((feriado) => {
      const {title, extra } = feriado;
      const lowercaseFilter = filterValue.toLowerCase();
      return (
        title.toLowerCase().includes(lowercaseFilter) ||
        extra.toLowerCase().includes(lowercaseFilter)
      );
    });
    setFilteredFeriados(filteredData);
  };

  const handleSort = (sortOrder) => {
    let sortedData = [...filteredFeriados];
    if (sortOrder === 'asc') {
      sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOrder === 'desc') {
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setFilteredFeriados(sortedData);
    setOrden(sortOrder);
  };

  return (
    <div className="container">
      <Buscador handleFilter={handleFilter} handleSort={handleSort} />
      <table className="table table-info table-striped  mt-2">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeriados.map((feriado, index) => (
            <tr key={index}>
              <td>{feriado.date}</td>
              <td>{feriado.title}</td>
              <td>{feriado.extra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MiApi;
