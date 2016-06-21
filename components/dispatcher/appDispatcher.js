import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
    dispatchAction(action){
        this.dispatch(action);
    }
}

const appDispatcher = new AppDispatcher();

export default appDispatcher;