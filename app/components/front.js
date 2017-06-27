var React = require('react');
var ReactDom = require('react-dom');
var propTypes = require('prop-types');
var api = require('../utils/api');


class Front extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			city : ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);
	}

	handleSubmit(){
//		api.getData(this.state.city).then(function(res){
//			console.log(res);		})
this.props.onSubmit(this.state.city);
this.setState(function () {
      return {
        city: ''
      }
    })
	}
  	
  	handleUpdateZipcode(event){
		var val = event.target.value;
		this.setState(function(){
			return {
				city:val
			}
		})
	}
	render(){
		return(
				<div className = "page-center"
					  style={{flexDirection: this.props.direction}}>
					  	<div>
						<input 
							onChange={this.handleUpdateZipcode}
							id = 'username'
							className = 'textstyle'
							placeholder = 'City and State'
							type = 'text'
							autoComplete = 'off'
							value = {this.state.city}/></div>
						<div>
						<button 
							className='btn btn-success'
							onClick = {this.handleSubmit}
							type = 'submit'>
							checkWhether
						</button></div>
				</div>
			)
	}
}

Front.defaultProps = {
  direction: 'column'
}

Front.propTypes={
	direction: propTypes.string,
	onSubmit:propTypes.func
}

module.exports = Front;