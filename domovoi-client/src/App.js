import React, { Component } from 'react';
import AppRouter from './router';
import './App.css';

class App extends Component {
  	render() {
    	return (
      		<div className="App">
        		<header>
					Domovoi - Welcome!
        		</header>
        		<AppRouter/>
      		</div>
    	);
  	}
}

export default App;
