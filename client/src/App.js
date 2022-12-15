import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar'
import Home from './components/pages/Home/Home';
import {
  Routes,
  Route
} from 'react-router-dom';
import Product from './components/pages/Product/Product';
import Cart from './components/pages/Home/Cart/Cart';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/product/:id' element = {<Product />} />
      <Route path='/cart' element = {<Cart />} />
    </Routes>
    <Footer></Footer>
    </>

  )
}

export default App;