var React = require('react');
var ReactDom = require('react-dom');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Home = require('./Home');
var Switch = ReactRouter.Switch;
var Front = require('./front');


class App extends React.Component{
	render(){
		return(
			<Router>
				<div className = 'container'>
					<Route render={function (props) {
            		return (
              				<div className = 'navbar'>
              					<h1>Clever Title</h1>
              					<Front direction='row' onSubmit = {function(city){props.history.push({pathname: 'forecast',
                      search: '?city=' + city});}}/>
              				</div>
              				)
        			}} />	
					<Route exact path = '/' render = {function(props){return (
              				<div className = 'home-container' style={{backgroundImage: "url('../app/images/pattern.svg')"}}>
              					<h1 className='header'>Clever Body</h1>
              					<Front direction='column' onSubmit = {function(city){props.history.push({pathname: 'forecast',
                      search: '?city=' + city});}}/>
              				</div>
              				)}}/>
					<Route path = '/forecast' component = {Forecast}/>
				</div>	
			</Router>
			)
	}
}

module.exports = App;
