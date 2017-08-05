import React from 'react';


export class Info extends React.Component{
	render(){
		return (
			<div>
			<h3>{this.props.data.name}</h3>
			<h4>{this.props.data.desc}</h4>
			<h4>Cell: {this.props.data.number}</h4>
			<h4>{this.props.data.email}</h4>
			<a href={this.props.data.linkedin}><img alt="" src="./in.png"/></a>
			<a href={this.props.data.github}><img alt="" src="./git.png"/></a>
			</div>
		);
	}
}