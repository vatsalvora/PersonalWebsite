import React from 'react';


export class Education extends React.Component{
	render(){
		return (
			<div>
			<h1>Education</h1>
			{this.props.data.map(function(learn, index)
			{
				return (
					<div key = {index} className="desc">
					<h2>{learn.degree}</h2>
					<h3>{learn.institution}</h3>
					<h3>{learn.dates}</h3>
					</div>                                 
					);
				})
			}
			</div>
		);
	}
}