import ActionTypes from './actionTypes';
import AppDispatcher from '../dispatcher/appDispatcher';
import ArticlesApi from '../articles/articlesApi';

class ArticleActions {
    constructor(){
    }
    saveArticle(article){
        if(article){
            ArticlesApi.saveArticle(article);
            AppDispatcher.dispatchAction({
                actionType : ActionTypes.INITIALIZE,
                data : ArticlesApi.getArticles() 
            });
        } else {
            //TODO : Error
        }
    }
    deleteArticle(article){
        console.log(`Article Deleted : ${JSON.stringify(article)}`);
    }
}

export default new ArticleActions();