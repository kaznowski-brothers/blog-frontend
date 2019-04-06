import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">

        <div className="header">
          <h1>Kaznowski Brothers</h1>
        </div>

        <div className="article-container">

          <div className="article-tile">
            <h3>Article title 1</h3>
          </div>

          <div className="article-tile">
            <h3>Article title 2</h3>
          </div>

          <div className="article-tile">
            <h3>Article title 3</h3>
            <div className="article-content">
              <h2>Article title 3</h2>
              <p>This is some content</p>
              <p>This is more content</p>
            </div>
          </div>

          <div className="article-tile">
            <h3>Article title 4</h3>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
