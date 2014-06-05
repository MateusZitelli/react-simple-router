/** @jsx React.DOM */
var React = require('react');
var ReactRouter = require('../index');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Teste = React.createClass({
	render: function() {
		return (
			<div>
				Teste :D
			</div>
		);
	}
});

var index = React.createClass({
	render: function() {
		return (<p>Index :D</p>);
	}
});

var App = React.createClass({
	render: function() {
		var indexRule = /^index/;
		var testeRule = /^teste/;
		return (
				<Router>
					<Route rule={testeRule} component={Teste}></Route>
					<Route rule={indexRule} component={index}></Route>
				</Router>
			);
	}
});

React.renderComponent(App(), document.body);