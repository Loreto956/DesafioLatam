const express = require('express')
const app = express()
const fs = require ('fs')
const cors = require('cors')

app.listen(3000, console.log('¡¡Servidor encendido!!'))

app.use(cors())

app.use(express.json())

// Servir la página HTML en la raíz del servidor
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


// Para ver todas las canciones
app.get("/canciones", (req, res) => {
    const canciones =JSON.parse(fs.readFileSync("repertorio.json", 'utf8'))
    res.json(canciones)
})


// Para agregar nueva canción
app.post("/canciones", (req, res) => {
    const nuevaCancion = req.body
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", 'utf8'))

    nuevaCancion.id = Math.floor(Math.random() * 9999) // Generar ID único
    canciones.push(nuevaCancion)
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones, null, 2))

    res.send("Canción agregada con éxito")
})


// Para modificar canción existente por su ID
app.put("/canciones/:id", (req, res) => {
    const {id} = req.params
    const datosCancion = req.body 
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", 'utf8'))
    const index = canciones.findIndex(c => c.id == id)
        
    if (index !== -1) {
        canciones[index] = { ...canciones[index], ...datosCancion}
        fs.writeFileSync("repertorio.json", JSON.stringify(canciones, null, 2))
        res.send("Canción modificada con éxito") 
    } else {
        res.status(404).send("Canción no encontrada")
    }
})


// Para eliminar una canción por su ID
app.delete("/canciones/:id", (req, res) => {
    const {id} = req.params
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", 'utf8'))
    const index = canciones.findIndex(c => c.id == id)
        
    if (index !== -1) {
        canciones.splice(index,1)
        fs.writeFileSync("repertorio.json", JSON.stringify(canciones, null, 2))
        res.send("Canción eliminada con éxito")
    } else {
        res.status(404).send("Canción no encontrada")
    }
})