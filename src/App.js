import React, { Component } from 'react'
import Message from './components/Message'
import './App.css';

export class App extends Component {
    render() {
        return (
            <div>
                <h1>Brandon Johnson</h1>
                <Message name="Brandon" message="how is your day going?"/>
                <Message name="Cat" message="did you eat yet?"/>
                <Message name="ME" message="how was your weekend?"/>
            </div>
        )
    }
}

export default App;

