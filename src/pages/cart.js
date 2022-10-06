import "./cart.scss"
import ButtonExit from "../components/ui/buttonExit";
import Button from "../components/ui/button";
import ProductListItem from "../components/elements/productListItem";
import { Link } from "react-router-dom";

function Cart() {

    const item = {
        img: 'cardImg/3.png',
        title: 'Креветки по-королевски в лимонном соке',
        price: 1820,
    }

    return (
        <div className="App">
            <div className="cart">
                <div className="cart-header">
                    <Link to={'/'}> <ButtonExit />
                    </Link>
                    <h1 className="cart-header__title">
                        Корзина с выбранными товарами
                    </h1>
                </div>
            </div>
            <div className="cart">
                <ProductListItem item={item} />
            </div>
            <div className="cart-line">

            </div>
            <div className="cart">
                <div className="cart-footer">
                    <div className="cart-footer__price">
                        <div>Заказ на сумму:</div>
                        <span>6220 ₽</span>
                    </div>
                    <Button>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </div>

    );
}

export default Cart;