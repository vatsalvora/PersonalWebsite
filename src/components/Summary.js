import React from 'react';


export class Summary extends React.Component{
	render(){
		return (
			<div>
			<h1>Summary</h1>
			<div className="desc">
			<h3>{this.props.data[0]}</h3>
			<h3>{this.props.data[1]}</h3>
			</div>
			</div>
		);
	}
}