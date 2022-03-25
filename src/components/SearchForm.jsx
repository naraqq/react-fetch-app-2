import React, {Component} from 'react';

class SearchForm extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <form className='search-form'>
                    <label className='is-hidden' htmlFor='search'>Search</label>
                    <input type="search" name='search' placeholder='Search...' />
                    <button type='submit' id='submit' className='search-button'>+</button>
                    <i className='material-icons icn-search'></i>
                </form>

            </div>
        );
    }
}
 
export default SearchForm;