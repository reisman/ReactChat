import React, { Component } from 'react';
import Sidebar from './containers/Sidebar';
import Messages from './containers/Messages';
import NewMessage from './containers/NewMessage';

import './App.css';

class App extends Component {
    render() {
        return (
            <div id="container">
                <Sidebar />
                <section id="main">
                    <Messages />
                    <NewMessage />
                </section>
            </div>
        );
    }
}

export default App;
