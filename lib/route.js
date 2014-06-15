/** @jsx React.DOM */
var React = require('react');
var utils = require('./utils');

var createRoute = function(opts){
	var route = {
		rule: opts.rule,
		component: opts.component,
	};

	delete opts.rule;
	delete opts.component;

	route.props = opts;
	route.match = function(url) {
		var matches = url.match(this.rule);
		if(matches === null) {
			return null;
		} else {
			this.props.matches = matches;
			return true;
		}
	}.bind(route);

	return route;
};

module.exports = createRoute;
