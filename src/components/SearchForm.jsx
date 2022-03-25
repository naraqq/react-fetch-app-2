import React, {Component} from 'react';

class SearchForm extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <form className='search-form'>
                    <label className='is-hidden' htmlFor='search'>Search</label>
                    <input placeholder='Search....' />
                </form>
            </div>
        );
    }
}
 
export default SearchForm;