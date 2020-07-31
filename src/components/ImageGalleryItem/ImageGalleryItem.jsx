import React, { Component } from 'react';

export default class ImageGalleryItem extends Component  {
    handleClick = ()=> {
        this.props.handleImageClick(this.props.largeImg)
    }
    render() {
        return (
            <li className="ImageGalleryItem">
                <img src={this.props.smallImg} className="ImageGalleryItem-image" alt="img" onClick={this.handleClick}/>
            </li>
    )
    }
}