import React from 'react';
import ArticleForm from './articleForm';
import ArticlesApi from './articlesApi';
import ArticleStore from '../stores/articleStore';
import toastr from 'toastr';
import ArticleValidator from './ArticleValidator';
import ArticleActions from '../actions/articleActions';

export default class ManageArticle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mode : 'New',
            article : {},
            dirty : false
        };
        this.onArticleStateChange=this.onArticleStateChange.bind(this);
        this.onArticleSave=this.onArticleSave.bind(this)
        this.validator = new ArticleValidator();
    }

    componentWillMount(){
        console.log(this.props.params.id);
        if(this.props.params.id){
            if(parseInt(this.props.params.id)===0){
                this.state.article = ArticlesApi.getNewArticle();
            } else {
                this.state.mode = 'Edit';
                this.state.article = ArticleStore.getById(id);
            }
        } else {
            //TODO: show error
        }
    }
    onArticleStateChange(evt){
        this.setState({dirty:true});
        const field = evt.target.name;
        const value = evt.target.value;
        this.state.article[field]=value;
        return this.setState({article : this.state.article});
    }
    onArticleSave(evt) {
        evt.preventDefault();
        ArticleActions.saveArticle(this.state.article);
        toastr.success('Author saved.');
        this.context.router.push("articles");
    }
    onValidate(evt){
        const field = evt.target.name;
        const value = evt.target.value;

    }
    render() {
        return (
            <ArticleForm article={this.state.article}
                onChange={this.onArticleStateChange}
                onSave={this.onArticleSave}
                onCancel={this.onCancelForm}/>
        );
    }
}

ManageArticle.contextTypes = {
    router: React.PropTypes.object.isRequired
}