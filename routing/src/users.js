import './userstyle.css';
import React, { Component } from 'react';
import {Display} from './Contact.js';

class users extends Component {
  constructor() {
  super();
    this.state = {
        contacts: []
      };
    }


 componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => {
    this.setState({ contacts: data })
   } )
    .catch(console.log)
  }


 render() {
  return (
       <div>
           	<div classNmme="userstyle">
            	<h1>Users</h1>
              <div>
               <Display contacts={this.state.contacts} /> 
            </div>
      </div>
    </div>
  );
 }
}
export default users;

