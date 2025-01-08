// import './App.css'
// import MyComponent from "./components/MyComponent.tsx";
//
// function App() {
//   return (
//     <>
//         <MyComponent title={'Hello 1'}>Lorem ipsum dolor.</MyComponent>
//         <MyComponent title={'Hello 2'}/>
//         <MyComponent title={'Hello 3'}/>
//         {/*{MyComponent({text: 'Hello 2'})}*/}
//     </>
//   )
// }
//
// export default App
import './App.css'
import {products} from "./data/productsList.ts";
import MyProduct from "./my-product/MyProduct.tsx";

function App() {
    return (
        <>
            {
                products.map((product,index)=> <MyProduct key={index} product={product}/>)
            }
        </>
    )
}

export default App