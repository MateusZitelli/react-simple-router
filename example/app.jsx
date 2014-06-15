/** @jsx React.DOM */
var React = require('react');
var ReactRouter = require('../index');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Teste = React.createClass({
	render: function() {
		return (
			<div>
				Hello {this.props.name} {this.props.matches[1]} :D~~~
			</div>
		);
	}
});

var index = React.createClass({
	render: function() {
		return (<p>Index</p>);
	}
});

var App = React.createClass({
	render: function() {
		var indexRule = /^$/;
		var testeRule = /^test\/([0-9]*?)$/;
		return (
				<Router>
					<Route rule={testeRule} component={Teste} name="Mateus"></Route>
					<Route rule={indexRule} component={index}></Route>
				</Router>
			);
	}
});

React.renderComponent(App(), document.body);
