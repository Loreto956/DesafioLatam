import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MyCard from './components/MyCard'

function App() {

  return (
    <>
      
           <Header title="Adopta un perrito" />
      <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
        <MyCard
        image="https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg"
        name="Canito"
        description="Es cariñoso con los niños, le encanta dar amor, dormir y jugar"
        text="Canito"
        color="danger"
        />
        </div>
        <div className='col-md-3'>
        <MyCard 
        image="https://i0.wp.com/www.ntv.com.mx/wp-content/uploads/2019/11/golden-cachorro-e1549967733842-1024x650.jpg?fit=1024%2C650&ssl=1"
        name="Cachupín"
        description="Revoltoso, le gusta jugar y tener actividades al aire libre"
        text="Cachupín" 
        color="success"
        />
        </div>
        <div className='col-md-3'>
        <MyCard 
        image="https://www.seguroparaperros.com/wp-content/uploads/2021/11/cuidado-perros-primavera-1.jpg"
        name="Terry"
        description="Tranquilo, cariñoso, puede acompañaerte a ver tv para que le hagas cariño"
        text="Terry" 
        color="warning"
        />
        </div>
        <div className='col-md-3'>
        <MyCard 
        image="https://clubmac.mx/wp-content/uploads/2019/11/IMG_3953-1024x1003.jpg"
        name="Ponyo"
        description="Pelusón, le encanta hacer desorden y despertar a sus amos"
        text="Ponyo" 
        color="info"
        />
        </div>
      </div> 
      </div>
      <Footer/>
     
    </>
  )
}

export default App
