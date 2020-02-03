import React from 'react';
import {Content} from './Content.js';


export const Display = (props) => {
      const contacts = props.contacts;
  return (
       <div>
          <center>
           <h1 className="text-primary">
            User
           </h1>
          </center>
          {
            contacts.map((contact) => (<Content key={contact.id} contact={contact}/>))
          }
       </div>
        
      );

}
  
          

