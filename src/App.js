import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import GifList from './components/GifList';

import './App.css';

class App extends Component {


  constructor() {
    super();
    this.state = {
      gifs : [],

    }
  }

  componentDidMount() {
    fetch("http://random")
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() { 
    return (
      <div className="main-header">
        <div className='inner'>
          <h1 className='main-title'>Search App</h1>
          <SearchForm/>
        </div>
        <div className='main-content'>
          <GifList/>
        </div>
      </div>
    );
  }
}
 
export default App;

