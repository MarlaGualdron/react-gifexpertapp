import React from 'react'

export const GifGridItem = ({title,url}) => {
    
    return (
        <div ClassName='card animate_animated_bounce'>
            <img src={ url } alt={ title } />
            <p> {title} </p>

        </div>
    )
}