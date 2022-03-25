import React, {Component} from 'react';
import SearchForm from './components/SearchForm';

import './App.css';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="main-header">
        <div className='inner'>
          <h1 className='main-title'>Search App</h1>
          <SearchForm/>
        </div>
      </div>
    );
  }
}
 
export default App;

