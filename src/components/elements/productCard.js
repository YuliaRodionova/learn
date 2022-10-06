import './productCard.scss';
import ButtonAdd from '../ui/buttonAdd';


function ProductCard({ item, addToCartHandler }) {

    return (
        <div className='product-card'>
            <img src={item.img} className='product-card__img' alt='' />
            <p className='product-card__title'>
                {item.title}
            </p>
            <p className='product-card__description'>
                {item.description}
            </p>
            <p className='product-card__price'>
                {item.price} ₽
                <span className='product-card__price-weight'>
                    / {item.wight}  г.
                </span>
                <ButtonAdd сlickHandler={() => addToCartHandler(item)} />
            </p>
        </div>
    )
}

export default ProductCard