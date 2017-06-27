var React = require('react');
var ReactDom = require('react-dom');
var api = require('../utils/api');
var utils = require('../utils/helpers');
var queryString = require('query-string');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;


function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div className='dayContainer'>
      <img className='weather' src={'./app/images/' + icon + '.svg'} alt='Weather' />
      <p className='subheader'>{date}</p>
    </div>
  )
}
class Forecast extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			forecastData: [],
			loading: false

		}
		this.makeRequest = this.makeRequest.bind(this);
	}

	componentDidMount(){
		this.city = queryString.parse(this.props.location.search).city;
		this.makeRequest(this.city); 
	}

componentWillReceiveProps(nextProps) {
	 this.city = queryString.parse(nextProps.location.search).city;
     this.makeRequest(this.city);
}

	makeRequest(city){
		this.setState(function(){
			return{
				loading : true
			}
		})

		api.getForcast(this.city).then(function(res){
			this.setState(function(){
			return{
				forecastData : res.list,
				loading : false
			}
		})
			console.log(this.state.forecastData);
			}.bind(this))

	}


	render() {
    return this.state.loading === true
      ? <h1 className='forecast-header'> Loading </h1>
      : <div>
          <h1 className='forecast-header'>{this.city}</h1>
          <div className='forecast-container'>
            {this.state.forecastData.map(function (listItem) {
              return <DayItem key={listItem.dt} day={listItem} />
            })}
          </div>
        </div>
  }
}

module.exports = Forecast;	