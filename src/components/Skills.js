import React from 'react';


export class Skills extends React.Component{
	render(){
		return (
			<div>
			<h1>Skills</h1>
			{this.props.data.map(function(elem, index)
					{
						return (
							<h3 key={index} className="tags desc">{elem}</h3>                             
							);
					})
			}
			</div>
		);
	}
}