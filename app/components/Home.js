var React = require('react');
var ReactDom = require('react-dom');
var Front = require('./front');

class Home extends React.Component{
	render(){
		return(
			//<p>Home</p>

			 <div className='container'>
			 	<div className='navbar'>
			 		<Front direction='row' head = 'Clever Title'/>
			 	</div>
			 	<div className='home-container'>
			 		<Front  direction='column' head= 'Enter the city and state name'/>
			 	</div>
			 </div>
			)
	}
}

module.exports = Home;