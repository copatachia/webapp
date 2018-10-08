import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    };

    onFormSubmit(event) {
      event.preventDefault();
        console.log(`we are trying to submit the form`);
    }
    render() {
        return (
            <form className='input-group' onSubmit={this.onFormSubmit}>
                <input
                    placeholder='Get a 5 day forchast in your favourites cities'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className='input-group-btn' >
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
                <span> {this.state.term} </span>
            </form>
        )
    }
}