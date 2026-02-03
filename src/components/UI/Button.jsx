import React from 'react'
const Button = ({ text, onClick, classes, type }) => {
    return (
        <button
            className={`${classes}`}
            onClick={onClick} type={type}>
            {text}
        </button>
    )
}

export default Button