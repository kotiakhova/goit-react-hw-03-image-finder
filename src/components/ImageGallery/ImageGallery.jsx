import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery ({images, handleImageClick}) {
    return (
        <>
        <ul className="ImageGallery">
            {images.map(({id, webformatURL,largeImageURL}) => ( 
            <ImageGalleryItem 
                key={id}
                smallImg={webformatURL}
                largeImg={largeImageURL}
                handleImageClick={handleImageClick}
                />))}
        </ul>

        </>
    )
}