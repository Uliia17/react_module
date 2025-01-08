import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {
  return (
    <>
        <MyComponent text={'Hello 1'}/>
        <MyComponent text={'Hello 2'}/>
        <MyComponent text={'Hello 3'}/>
        {/*{MyComponent({text: 'Hello 2'})}*/}
    </>
  )
}

export default App
