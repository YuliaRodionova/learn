import React, { useState } from 'react';
import ProductCard from '../components/elements/productCard';
import CardsHeader from '../components/blocks/cardsHeader';
import './products.scss';
import cardsCollection from '../cardsCollection';

function Products() {
    // const [cartCount, setCartCount] = useState(0);
    // const [cartPrice, setCartPrice] = useState(0);

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => {
            const newCart = [...prevCart];
            newCart.push(item);
            return newCart;
        })

        // setCartPrice(prevPrice => {
        //     return prevPrice + productPrice;
        // });

        // setCartCount(prevCount => {
        //     return prevCount += 1;
        // });
    }

    const cardsRow = cardsCollection.map((card, i) => {
        return <ProductCard item={card} key={i} addToCartHandler={addToCart} />
    })

    return (
        <div className="App">
            <div className='wrapper'>
                <div className='cards-header'>
                    <CardsHeader cart={cart} />
                </div>
                <div className="cards-list">
                    {cardsRow}
                </div>
            </div>
        </div>
    );
}

export default Products;
