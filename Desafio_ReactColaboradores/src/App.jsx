import { useState } from 'react'
import './App.css'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import { BaseColaboradores } from './js/BaseColaboradores'
import Alert from './components/Alert'
import Buscador from './components/Buscador'


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState([])
  const [alert, setAlert] = useState({ mensaje:'', type: ''})

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador])
    setAlert({mensaje:'Colaborador agregado exisotamente', type:'success'})
    setTimeout(() => {
      setAlert({mensaje:'mensaje', type:''})
    }, 2000)
  }

  const eliminarColaborador = (index) => {
    const nuevaLista = colaboradores.filter((colaborador, i) => i !== index)
    setColaboradores(nuevaLista)
    setAlert({mensaje:'Colaborador eliminado exitosamente', type:'warning'})
    setTimeout(() => {
      setAlert({mensaje:'', type:''})
    }, 2000)
  }

  return (
    <>
    <div>
      <h2>Listado de Colaboradores</h2>
        <Buscador
        colaboradores={colaboradores}
        setColaboradoresFiltrados={setColaboradoresFiltrados}
        />
        <Listado 
        colaboradores={
          colaboradoresFiltrados.length > 0 
          ? colaboradoresFiltrados 
          : colaboradores
          } 
          eliminarColaborador={eliminarColaborador}
          />
    </div>
    <div className='mt-3'>
    {alert.mensaje && <Alert mensaje={alert.mensaje} type={alert.type} />}
    </div>
    <div>
      <h3>Agregar Colaborador</h3>
        <Formulario agregarColaborador={agregarColaborador} setAlert={setAlert} />
    </div>
    
    </>
  )
}

export default App
