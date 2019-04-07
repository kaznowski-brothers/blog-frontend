import React, { Component } from 'react';
import './ArticleContainer.scss';
import ArticleTile from './ArticleTile'

class ArticleContainer extends Component {
    render() {
        return (
        <div className="article-container">

          <ArticleTile title="Article 1"/>
          <ArticleTile title="Article 2"/>
          <ArticleTile title="Article 3"/>
          <ArticleTile title="Article 4"/>

        </div>
        )
    }
}

export default ArticleContainer;