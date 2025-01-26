import './App.css'
import UsersComponent from "./components/UsersComponent.tsx";

function App() {
  console.log('app') //показує в консолі компонент App
  return (//відображає дочірній компонент UsersComponent
    <div>
      <UsersComponent/>
    </div>
  )
}

export default App
