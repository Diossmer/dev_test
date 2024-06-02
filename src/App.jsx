import { version } from 'react'
import './assets/App.css'
import Head from './head'
import Formulario from './components/formulario'

function App() {

  return (
    <>
      <Head titulo={"TEST UNITARIO"} />
      <h4>Test de desarrollador</h4>
      <h4>Cuadro de preguntas</h4>
      <h4>Cuadro de estadistica</h4>
      <h4>Mostrar porcentaje de evaluacion</h4>
      <h3>Campos con validacion</h3>
      <h3>Campos con funcionalidad</h3>
      <h3>Campos con prueba</h3>
      <h3>Comentarios pulcro y con significado</h3>
      <Formulario />
      <h3>version: - {version}</h3>
    </>
  )
}

export default App
