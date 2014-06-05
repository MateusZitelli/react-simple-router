/** @jsx React.DOM */
var React = require('react');
var utils = require('./utils');

var Router = React.createClass({
    displayName: 'Router',
    getInitialState: function() {
        return {
            match: this.getMatchedRoute()
        }
    },
    componentDidMount: function(){
        var _this = this;
        window.onhashchange = function(){
            _this.getMatchedRoute();
        };
    },
    getMatchedRoute: function(){
        var currentUrl = utils.getCurrentLocation();
        var routes = this.props.children;
        var match;
        if(Array.isArray(routes)){
            match = routes.filter(utils.match.bind(null, currentUrl));
        }else{
            match = [utils.match(currentUrl, routes) ? routes : null];
        }

        if(match){
            return match[0];
        }else{
            return null;
        }
    },
    render: function() {
        var matchedRoute = this.getMatchedRoute();
        return this.transferPropsTo(React.DOM.div(null, matchedRoute.component({})));
    }
});

module.exports = Router;