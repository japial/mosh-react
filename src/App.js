import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';

class App extends Component {
    state = {
    };
    render() {
        return (<div className="App">
            <main role="main" className="container">
               <Movies/>
            </main>
        </div>);
    }
}

export default App;
