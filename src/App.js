import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import GifList from './components/GifList';

import './App.css';

class App extends Component {


  constructor() {
    super();
    this.state = {
      gifs : []
    }
  }

  componentDidMount() {
    
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=uhIwPD3GPqS3iLTrhbYg3ZhKvf5RsJbJ")
    .then(response => response.json())
    .then(res =>  {
      this.setState({gifs: res.data})
    })
    .catch(err => console.log("error fetching and parsing data!", err))
  }

  render() { 
    return (
      <div className="main-header">
        <div className='inner'>
          <h1 className='main-title'>Search App</h1>
          <SearchForm data={this.state.gifs} />
        </div>
        <div className='main-content'>
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
 
export default App;

