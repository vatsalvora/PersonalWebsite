import React from 'react';


export class Experience extends React.Component{
	render(){
		return (
			<div>
			<h1>Experience</h1>
			{this.props.data.map(function(job, index)
			{
				return (
					<div key = {index} className="desc">
					<h2>{job.title}</h2>
					<h3>{job.company}</h3>
					<h3>{job.dates}</h3>
					<h3>{job.location}</h3>
					<h3>{job.desc}</h3>
					</div>                                 
					);
				})
			}
			</div>
		);
	}
}