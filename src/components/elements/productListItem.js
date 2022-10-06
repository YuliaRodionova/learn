import "./productListItem.scss"
import ButtonClose from "../ui/buttonClose"

function ProductListItem({ item }) {
    return (
        <div className='list-item'>
            <img src={item.img} className='list-item__img' alt='' />
            <p className='list-item__title'>
                {item.title}
            </p>
            <p className='list-item__price'>
                {item.price} ₽
                <ButtonClose />
            </p>
        </div>
    )
}

export default ProductListItem