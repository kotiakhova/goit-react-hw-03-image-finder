import React, { Component } from 'react';

import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import Loader from './Loader/Loader'
import Button from './Button/Button'
import Modal from './Modal/Modal'

import imagesApi from '../services/imagesApi'
import './styles.css'

export default class App extends Component {
    state = {
        images: [],
        loading: false,
        error: null,
        searchQuery: '',
        page: 1,   
        largeImageUrl: null,
        showModal: false
    }


    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;
    
        if (prevQuery !== nextQuery) {
          this.fetchImages();
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      }
    fetchImages = () => {
        const {searchQuery, page } = this.state

        this.setState({loading: true})
        imagesApi.fetchImagesWithQuery(searchQuery, page)
        .then(newImages => { this.setState(prevState => ({images: [...prevState.images, ...newImages ], page: prevState.page +1}))})                
        .catch(error => this.setState({error}))
        .finally(()=> this.setState({ loading: false }))
    }

    handleSearchFormSubmit = query => {
        this.setState({
          searchQuery: query,
          page: 1,
          images: [],
        });
      };

    toggleModal = largeImage => {
        this.state.largeImageUrl ? 
        this.setState({ largeImageUrl: null}):this.setState({
            largeImageUrl: largeImage
          })
    }
    

    render() {
        const {loading, error, images,largeImageUrl} = this.state
        return (
            <>
            <SearchBar 
            onSubmit={this.handleSearchFormSubmit}
            />
            {error && <p>Whoops, something went wrong: {error.message}</p>}
            {loading && (<Loader />)}
            {images.length > 0 && <ImageGallery images={images} handleImageClick={this.toggleModal}/>}    
            {images.length > 0 && !loading&& <Button handleClick={this.fetchImages}/>}    
            {largeImageUrl && <Modal largeImg={largeImageUrl} onClose={this.toggleModal}/>}
            </> 
        )
      }

}

// реализовать закрытие модального окна