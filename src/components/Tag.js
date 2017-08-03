import React from 'react';


export class Tag extends React.Component{
	render(){
		return (
			<div>
			{this.props.data.map(function(tag, index)
				{
					return (
						<span key = {index} className="badge badge-pill badge-primary">
						<h4>{tag}</h4>
						</span> 
					);
				})
			}
			</div>
		);
	}
}