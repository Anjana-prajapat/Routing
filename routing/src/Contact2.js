import React from 'react';
import {Content2} from './Content2.js';


export const Display = (props) => {
      const contacts = props.contacts;
  return (
       <div>
          <center>
           <h1 className="text-primary">
            Posts
           </h1>
          </center>
          {
            contacts.map((contact) => (<Content key={contact.id} contact={contact}/>))
          }
       </div>
        
      );

}
  
          

