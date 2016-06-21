import React from 'react';
import ArticleView from './articleView';
import Anchor from '../common/anchor';
import ArticleStore from '../stores/articleStore';


export default class ArticleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentWillMount() {
        this.state.articles = ArticleStore.getAll();
        ArticleStore.onChange(this,this._onChange);
        console.log('component will mount');
    }
    componentDidMount() {
        console.log('component did mount');
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return nextProps.id !== this.props.id;
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        ArticleStore.offChange(this,this._onChange);
    }
    _onChange(){
        this.setState({ articles : ArticleStore.getAll() });
    }
    render() {
        let articleViews = [];
        //const path = `/articles/manage/`;
        this.state.articles.map(item => {
            articleViews.push(
                <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                    <ArticleView article={item} />
                </div>);
        });
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-6">
                            <span>Article Store </span>
                        </div>
                        <div className="col-xs-6">
                            <span className="pull-right">
                                <Anchor to="/articles/manage/0" className="btn btn-sm btn-primary">
                                    New Article
                                </Anchor>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="row">
                        {articleViews}
                    </div>
                </div>
            </div>
        );
    }
}