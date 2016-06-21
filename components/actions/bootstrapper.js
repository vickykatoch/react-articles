
import ActionTypes from './actionTypes';
import AppDispatcher from '../dispatcher/appDispatcher';
import ArticlesApi from '../articles/articlesApi';


class Bootstrapper {
    run(){
        AppDispatcher.dispatchAction({
            actionType : ActionTypes.INITIALIZE,
            data : ArticlesApi.getArticles() 
        })
    }
}
export default new Bootstrapper();