import React, { Component } from 'react';

export default class SearchBar extends Component  {
    state = {
        inputValue: ''
    }
    handleChange = e => {
        this.setState({inputValue: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue: ''})
    }
    render() {
        return (
            <>
                <header className="Searchbar">
                <form 
                    className="SearchForm"
                    onSubmit={this.handleSubmit}
                    >
                    <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                    className="SearchForm-input"
                    type="text"
                    value = {this.state.inputValue}
                    onChange={this.handleChange}
                    // // autocomplete="off"
                    // autofocus
                    placeholder="Search images and photos"
                    />
                </form>
                </header>
            </>
        )

    }

}