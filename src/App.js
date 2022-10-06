/*import ProductCard from './components/elements/productCard';
import CardsHeader from './components/blocks/cardsHeader';
import './App.css';
import cardsCollection from './cardsCollection';

function App() {
  const cardsRow = cardsCollection.map((card, i) => {
    return <ProductCard item={card} key={i} />
  })

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='cards-header'>
          <CardsHeader />
        </div>
        <div className="cards-list">
          {cardsRow}
        </div>
      </div>
    </div>
  );
}

export default App;*/
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Products from "./pages/products";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/basket' element={<Cart />} />
      </Routes>
    </>
  )


}

export default App;