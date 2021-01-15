import React from 'react'

export const GifGriditem = ({id,title,url}) => {
    return (
        <div className="card animate__animated animate__flip">
            <img src={ url } alt={title} />
            <p>{title}</p>
        </div>
    )
}
