import React from 'react';
import {Content1} from './Content1.js';


export const Display = (props) => {
      const contacts = props.contacts;
  return (
       <div>
          <center>
           <h1 className="text-primary">
            Contact List
           </h1>
          </center>
          {
            contacts.map((contact) => (<Content1 key={contact.id} contact={contact}/>))
          }
       </div>
        
      );

}
  
          

