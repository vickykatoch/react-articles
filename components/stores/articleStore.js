import ActionTypes from '../actions/actionTypes';
import AppDispatcher from '../dispatcher/appDispatcher';
import EventEmitter from 'eventemitter3';

const CHANGE_EVENT = 'change';

class ArticleStore extends EventEmitter{
    constructor(){
        super();
        this.articles =[];
    }
    getAll() {
        return this.articles;
    }
    getById(id){
        return this.articles[0];
    }
    onChange(listener, context) {
        this.on(CHANGE_EVENT, listener, context);
    }

    offChange(listener, context) {
        this.removeListener(CHANGE_EVENT, listener, context);
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
}

const articleStore =new ArticleStore();

articleStore.dispatchToken = AppDispatcher.register(action => {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            articleStore.articles = action.data;
            articleStore.emitChange();
            break;
        case ActionTypes.CREATE_ARTICLE:
            articleStore.articles.push(action.data);
            articleStore.emitChange();
            break;
        default:
            // Do nothing
    }
});

export default articleStore;
