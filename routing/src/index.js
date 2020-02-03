import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import users from './users.js';
import contacts from './contacts.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import posts from './posts.js';

const routing = (
  <Router>
    < div>
      <ul>
      <div className="indexstyle">
         <li>
         <Link to ="/Posts">Posts</Link>
        </li>
          <li>
          <Link to ="/Users">Users</Link>
         </li>
        <li>
          <Link to ="/Contacts">Comments</Link>
         </li>
         </div>
      </ul>
  
      <Route path="/" component={App} />
      <Route path="/Posts" component={posts} />
      <Route path="/Users" component={users} />
      <Route path="/Contacts" component={contacts} />
  
  </div>
   </Router>
 )
ReactDOM.render(routing, document.getElementById('root'))

