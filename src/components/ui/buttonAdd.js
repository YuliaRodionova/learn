import ButtonIcon from "./buttonIcon"

function ButtonAdd({ сlickHandler }) {
    return (
        <ButtonIcon сlickHandler={сlickHandler}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1.28564V12.3571" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M12.3569 6.82135L1.28551 6.82135" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </ButtonIcon>
    )

}

export default ButtonAdd

