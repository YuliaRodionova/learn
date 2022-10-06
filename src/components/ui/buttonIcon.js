import './buttonIcon.scss'

function ButtonIcon({ children, addClass, сlickHandler }) {
    return (
        <button onClick={сlickHandler} className={`button-icon ${addClass}`}>
            {children}
        </ button>
    )

}

export default ButtonIcon