import React from 'react';


export default function Button ({handleClick}) {
    return (
        <>
        <button className="Button" onClick={handleClick}>Load more</button>
        </>
    )
}