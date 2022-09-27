import ProductCard from './components/elements/productCard';
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

export default App;
