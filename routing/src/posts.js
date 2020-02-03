import './userstyle.css';
import React, { Component } from 'react';
import {Display} from './Contact2.js';

class users extends Component {
  constructor() {
  super();
    this.state = {
        contacts: []
      };
    }


 componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
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
            	<h1>Posts</h1>
              <div>
               <Display contacts={this.state.contacts} /> 
            </div>
      </div>
    </div>
  );
 }
}
export default users;

