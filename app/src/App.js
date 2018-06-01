import React, { Component } from 'react'
import Link from './components/Link/'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <Link to='https://github.com/codecomp/quarrel#readme'>Electron</Link>
            </div>
        );
    }
}

export default App
