import React from 'react';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="menu">
                    <Header title="Backlog" />
                    <Header title="Twombly" />
                    <Header title="Something" />
                </div>
                <h1 className="book-title">Book Title</h1>
                <h2>Author</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default App;