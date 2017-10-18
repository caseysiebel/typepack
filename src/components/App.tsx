import React from 'react';

import './styles/app.scss';

import Messages from './Messages';
import Form from './Form';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Messages />
                <Form />
            </div>
        );
    }
}

export default App;
