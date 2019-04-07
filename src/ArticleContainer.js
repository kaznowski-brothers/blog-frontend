import React, { Component } from 'react';
import './ArticleContainer.scss';
import ArticleTile from './ArticleTile'

class ArticleContainer extends Component {

    constructor(props) {
        super(props)
        this.articles = [...Array(100).keys()].map(function (item) {
            return { "title": "Article " + item };
        })
    }

    render() {
        var renderedArticles = this.articles.map(function (item) {
            return (
                <ArticleTile title={item.title} />
            )
        });

        return (
            <div className="article-container">
                {renderedArticles}
            </div>
        )
    }
}

export default ArticleContainer;