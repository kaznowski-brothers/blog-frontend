import React, { Component } from 'react';
import './ArticleTile.scss';

class ArticleTile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }

    click() {
        this.setState({
            clicked: true
        });
    }

    render() {
        var articleContent = ``;
        if (this.state.clicked) {
            articleContent = (
                <div className="article-content">
                    <h2>{this.props.title}</h2>
                    <p>This is some content</p>
                    <p>This is more content</p>
                </div>
            )
        }
        return (
            <div className="article-tile" onClick={() => {this.click()}}>
                <h3>{this.props.title}</h3>
                {articleContent}
            </div>
        )
    }
}

export default ArticleTile;
