
import React from 'react';

export default class ArticleView extends React.Component{
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.article.title}
                </div>
                <div className="panel-body">
                    {this.props.article.description}
                </div>
            </div>
        );
    }
}

ArticleView.propTypes = {
    article : React.PropTypes.object.isRequired
};
ArticleView.defaultProps = {
    article : {}
}