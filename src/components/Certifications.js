import React from 'react';


export class Certifications extends React.Component{
	render(){
		return (
			<div>
			<h1>Certifications</h1>
			<div className="desc">
			{this.props.data.map(function(cert, index)
			{
				return (
					<div key = {index}>
					<h2>{cert.title}</h2>
					<h3>{cert.dates}</h3>
					</div>                                 
					);
				})
			}
			</div>
			</div>
		);
	}
}