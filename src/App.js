import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import CounterApp from './components/counterApp';
import Movies from './components/movies';
import Navbar from './components/navbar';

class App extends Component {
    state = {
    };
    render() {
        return (<div className="App">
            <main role="main" className="container">
                <Navbar />
                <div className="content mt-2">
                    <Switch>
                        <Route path="/movies" component={Movies}/>
                        <Route path="/counter" component={CounterApp}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </main>
        </div>);
    }
}

export default App;
