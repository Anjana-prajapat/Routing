import React from 'react';
import ReactDom from 'react-dom';

export class Content1 extends React.Component{
	render () {
	var contacts=this.props.contact;
		return (
		 <div>
		    <div className =" card-header  text-success ">

		       <div className = " card-body ">
		          <h5 className = " card-text "> Id:{contacts.id}</h5>
		                  
		         <div>
		            <h5 className =" card-title "> Name:{contacts.name}</h5>
		            <h6 className =" card-subtitle mb-2 "> Email: {contacts.email}</h6>
		            <h6 className =" card-subtitle mb-2 "> Postid:{contacts.postid}</h6>
		         </div>


		         <div>
		            <p className ="card-subtitle mb-2  text-muted "> Name:{contacts.name}</p>
		            <p className ="card-subtitle mb-2  text-info "> Body:{contacts.body}</p>
		         </div>

		    

		       </div>
		    
		    </div>
		 </div>
		);  	
	}
}