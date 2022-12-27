import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar'
import Home from './components/pages/Home/Home';
import {
  Routes,
  Route
} from 'react-router-dom';
import Product from './components/pages/Product/Product';
import Cart from './components/pages/Cart/Cart';
import Order from './components/pages/Order/Order';
import SectionInformation from './components/views/SectionInformation/SectionInformation';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/product/:id' element = {<Product />} />
      <Route path='/cart' element = {<Cart />} />
      <Route path='/order' element = {<Order />} />
    </Routes>
    <SectionInformation />
    <Footer></Footer>
    </>

  )
}

export default App;