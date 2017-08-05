import React from 'react';

export class Personal extends React.Component{
	render(){
		return (
			<div>
			<h3>Personal</h3>
				{this.props.data.map(function(elem, index)
					{
						return (
							<h5 key={index} className="tags">{elem}</h5>);
				})}
			</div>
		);
	}
}