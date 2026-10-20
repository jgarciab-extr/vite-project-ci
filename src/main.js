import './styles/style.css'
import { Navbar } from './components/navbar.js'
import { Section } from './components/section.js'

const app = document.querySelector('#app')

// Contenedor principal semántico para las secciones
const mainContent = document.createElement('main')
mainContent.className = 'main-container'

mainContent.append(
  Section(
    "Esta es Sección 1",
    "Contenido modular de la primera sección creado con Vite y JavaScript. Ahora todo aparece ordenado desde la parte superior."
  ),
  Section(
    "Esta es Sección 2",
    "Segunda sección creada como componente independiente. Totalmente estilizado con tarjetas modernas y sin necesidad de hacer scroll."
  )
)

// Montamos la barra de navegación arriba y las secciones debajo dentro de #app
app.replaceChildren(Navbar(), mainContent)
