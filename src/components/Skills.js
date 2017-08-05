import React from 'react';


export class Skills extends React.Component{
	render(){
		return (
			<div>
			<h3>Skills</h3>
			{this.props.data.map(function(elem, index)
					{
						return (
							<h5 key={index} className="skills">{elem}</h5>                             
							);
					})
			}
			</div>
		);
	}
}