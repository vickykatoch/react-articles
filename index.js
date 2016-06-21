import React from 'react';
import {render} from 'react-dom';
import App from './modules/App';
import Repos from './modules/Repos';
import Repo from './modules/Repo';
import About from './modules/About';
import Home from './modules/Home';
import ManageArticle from './components/articles/manageArticle';
import ArticlesApp from './components/articles/articlesApp';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';
//https://github.com/azat-co/react/blob/master/ch10/nile/app.jsx

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
            <Route path="/articles" component={ArticlesApp} >
                <Route path="/articles/manage/:id" component={ManageArticle}/>    
            </Route>
            
        </Route>
    </Router>,
    document.getElementById('app'));



