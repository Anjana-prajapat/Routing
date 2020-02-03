import React from 'react';
import ReactDom from 'react-dom';

export class Content2 extends React.Component{
	render () {
	var contacts=this.props.contact;
		return (
		 <div>
		    <div className =" card-header  text-success ">

		       <div className = " card-body ">
		          <h5 className = " card-text "> Id:{contacts.id}</h5>
		                  
		         <div>
		            <h5 className =" card-title "> Tittle:{contacts.title}</h5>
		            <h6 className =" card-subtitle mb-2 "> UserID: {contacts.userId}</h6>
		            <h6 className =" card-subtitle mb-2 "> Body:{contacts.body}</h6>
		         </div>

		       </div>
		    
		    </div>
		 </div>
		);  	
	}
}