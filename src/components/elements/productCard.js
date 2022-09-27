import './productCard.css';
import ButtonIcon from '../ui/buttonIcon';


function ProductCard({ item }) {
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
                <ButtonIcon>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1.28564V12.3571" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12.3569 6.82135L1.28551 6.82135" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </ButtonIcon>
            </p>
        </div>
    )
}

export default ProductCard