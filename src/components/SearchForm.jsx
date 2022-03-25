import React, {Component} from 'react';

class SearchForm extends Component {
    state = { 
        searchText: ""
     } 

    onSearchChange = (e) => {
        this.setState({searchText: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText)
        e.currentTarget.reset();
    }

    render() { 
        return (
            <div>
                <form className='search-form' onSubmit={this.handleSubmit}>
                    <label className='is-hidden' htmlFor='search'>Search</label>
                    <input onChange={this.onSearchChange} type="search" name='search' placeholder='Search...' />
                    <button type='submit' id='submit' className='search-button'>+</button>
                    <i className='material-icons icn-search'></i>
                </form>

            </div>
        );
    }
}

// function dsad () {
//     return (  );
// }

// export default dsad ;
 
export default SearchForm;