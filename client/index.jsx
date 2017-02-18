import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App.jsx';
import Home from './containers/Home.jsx';
import Category from './containers/Category.jsx';
// import About from './containers/About';
// import Posts from './containers/Posts';
// import Post from './containers/Post';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component = {Home} />
      <Route path=":category" component={Category}/>
    </Route>
  </Router>,
  document.getElementById('app')
);