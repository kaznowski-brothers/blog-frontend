import React, { Component } from 'react';
import './ArticleTile.scss';

class ArticleTile extends Component {

    render() {
        return (
            <div className="article-tile">
                <h3>{this.props.title}</h3>
                <div className="article-content">
                    <h2>{this.props.title}</h2>
                    <p>This is some content</p>
                    <p>This is more content</p>
                </div>
            </div>
        )
    }
}

export default ArticleTile;
