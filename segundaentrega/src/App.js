//import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/NavBar/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import  Parallax from './components/Parallax/Parallax';
//import ItemCount from './components/ItemCount/ItemCount';
// import Loading from './components/Loading/Loading';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
         <NavBarComponent/>
         <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element= {<ItemListContainer />} />
          <Route path='/item/:itemId' element= {<ItemDetailContainer/>} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
    

    // <div>
    //   {/* <Loading /> */}n
    //   <NavBarComponent/>
    //   <ItemListContainer greeting={'Bienvenidos'}/>
    //   <ItemDetailContainer/>
    //   {/*<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('Cantidad agregada', quantity)}/>
    //   <Parallax />*/}n
    // </div>
