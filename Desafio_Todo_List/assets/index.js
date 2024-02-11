let tareas = [
  { id: 1, descripcion: 'Hacer la cama', completeda: false },
  { id: 2, descripcion: 'Bañarse', completeda: true },
  { id: 3, descripcion: 'Lavar los dientes', completeda: false }
];

function renderTareas() {
  const tareasList = document.getElementById('tareas');
  tareasList.innerHTML = '';


  tareas.forEach(tarea => {
    const tareaItem = document.createElement('li');
    tareaItem.className = `task-item ${tarea.completeda ? 'completeda' : ''}`;
    tareaItem.innerHTML = `
      <span>ID: ${tarea.id}</span>
      <span>${tarea.descripcion}</span>
      <button onclick="toggleTaskStatus(${tarea.id})">${tarea.completeda ? 'Pendiente' : 'Realizada'}</button>
      <button class="delete-button" onclick="borrarTarea(${tarea.id})">Eliminar</button>
    `;
    tareasList.appendChild(tareaItem);
  });

  // Actualizar resumen
  const totalTareas = document.getElementById('totalTareas');
  const completedaTareas = document.getElementById('tareasfinalizadas');

  totalTareas.textContent = tareas.length;
  completedaTareas.textContent = tareas.filter(tarea => tarea.completeda).length;
}

function addTarea() {
  const tareaDescripcionInput = document.getElementById('nuevaTarea');
  const tareaDescripcion = tareaDescripcionInput.value.trim ();
  if (tareaDescripcion !== '') {
    const nuevaTarea = {
      id: tareas.length + 1,
      descripcion: tareaDescripcion,
      completeda: false
    };
    tareas.push(nuevaTarea);
    renderTareas();
    tareaDescripcionInput.value = '' ;
  }
}

function toggleTaskStatus(tareaId) {
  const tareaIndex = tareas.findIndex(tarea => tarea.id === tareaId);
  if (tareaIndex !== -1) {
    tareas[tareaIndex].completeda = !tareas[tareaIndex].completeda;
    renderTareas();
  }
}

function borrarTarea(tareaId) {
  tareas = tareas.filter(tarea => tarea.id !== tareaId);
  renderTareas();
}

renderTareas();  // Renderiza las tareas iniciales al cargar la página
