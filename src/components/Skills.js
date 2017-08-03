import React from 'react';


export class Skills extends React.Component{
	render(){
		return (
			<div>
			<h3>Skills</h3>
			{this.props.data.map(function(elem, index)
					{
						return (
							<span key = {index} className="badge badge-pill badge-primary">
							<h5>{elem}</h5>
							</span>                                 
							);
					})
			}
			</div>
		);
	}
}