import React from 'react';
import ArticleList from './articleList';
import Bootstrapper from '../actions/bootstrapper';

export default class ArticlesApp extends React.Component{
    constructor(props){
        super(props);
        Bootstrapper.run();
    }
    render(){
        return (
            <div className="container">
                {this.props.children || <ArticleList/>}
            </div>
        );
    }
}