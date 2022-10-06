import './cardsHeader.scss';
import ButtonCart from '../ui/buttonCart';
import { Link } from "react-router-dom";


function CardsHeader({ cart }) {

    function nameText(count) {
        if (count === 1 || count === 21 || count === 31) {
            return 'товар'
        } else if (count > 1 && count <= 4) {
            return 'товара'
        } else if (count > 5 && count <= 20) {
            return 'товаров'
        }
    }

    const cartPrice = cart.length > 0 ? cart.reduce((summ, item) => {
        return summ += item.price;
    }, 0) : 0;

    return (
        <header className='header'>
            <h2 className='header__title'>Наша продукция</h2>
            <div className='header-cart'>
                <div className='header-cart_left'>
                    <p className='header-cart__text'>{cart.length} {nameText(cart.length)}
                    </p>
                    <p className='header-cart__text'>на сумму {cartPrice} ₽</p>
                </div>
                <Link to={'/basket'}>
                    <ButtonCart />
                </Link>
            </div>
        </header>

    )
}

export default CardsHeader