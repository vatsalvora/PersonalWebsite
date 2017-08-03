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
						<div key = {index}>
						<a href={proj.link}><h2>{proj.title}</h2></a>
						<Tag data={proj.tags}/>
						<h4>{proj.desc}</h4>
						</div>
					);
				})
			}
			</div>
		);
	}
}