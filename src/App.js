import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import GifList from './components/GifList';

import './App.css';
import axios from 'axios';

class App extends Component {


  constructor() {
    super();
    this.state = {
      gifs : []
    }
  }

  componentDidMount() {
  }

  performSearch = (query) => {

    axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=uhIwPD3GPqS3iLTrhbYg3ZhKvf5RsJbJ`
      )
      .then(response => {
        this.setState({
          gifs: response.data.data
        })
      })
      .catch(err => console.log("error fetching and parsing data!", err))
  }

  render() { 
    return (
      <div className="main-header">
        <div className='inner'>
          <h1 className='main-title'>Search App</h1>
          <SearchForm onSearch={this.performSearch} />
        </div>
        <div className='main-content'>
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
 
export default App;

