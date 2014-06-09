/** @jsx React.DOM */
var React = require('react');

var createRoute = function(opts){
	var route = {
		rule: opts.rule,
		component: opts.component
	};
	return route;
};

module.exports = createRoute;
