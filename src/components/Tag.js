import React from 'react';


export class Tag extends React.Component{
	render(){
		return (
			<div>
			{this.props.data.map(function(tag, index)
				{
					return (
						<h4 key={index} className="tags">{tag}</h4>
					);
				})
			}
			</div>
		);
	}
}