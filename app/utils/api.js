var React = require('react');
var ReactDom = require('react-dom');
var axios = require('axios');
var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = '031d29cc05b56e0b9c5d537796e34069';

function maketoka(getQueryStringData){
	//var arr = Object.keys(getQueryStringData);
	//console.log(arr);
return Object.keys(getQueryStringData).map(function(key){
		return key+'='+encodeURIComponent(getQueryStringData[key]);
	}).join('&');
}

function prepUrl(toka, queryStringData){
	return _baseURL+toka+'?'+maketoka(queryStringData)
}

function getQueryStringData(city){
	return{
		q:city,
		type:'accurate',
		APPID: _APIKEY
	}
}
module.exports = {
	getData,
	getForcast
}

function getData (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function (currentWeatherData) {
      return currentWeatherData.data
    }).catch(function(error){
    	console.log("not");})
}

function getForcast(city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast/daily', queryStringData)

  return axios.get(url)
    .then(function (forecastData) {
      return forecastData.data
    })
}
