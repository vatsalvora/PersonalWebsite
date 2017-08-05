import React from 'react';
import {Tag} from './Tag';

export class Projects extends React.Component{
	render(){
		return (
			<div>
			<h1>Projects</h1>
			{this.props.data.map(function(proj, index)
				{
					return (
						<div key = {index} className="desc">
						<h2>{proj.title}</h2>
						<Tag data={proj.tags}/>
						<h4>{proj.desc}</h4>
						<a href={proj.link} className="btn btn-primary">Go to GitHub Repo</a>
						</div>
					);
				})
			}
			</div>
		);
	}
}