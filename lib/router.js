/** @jsx React.DOM */
var React = require('react');
var utils = require('./utils');

var Router = React.createClass({
    displayName: 'Router',
    getInitialState: function() {
        return {
            match: this.getMatchedRoute()
        };
    },
    componentDidMount: function(){
        var _this = this;
        window.onhashchange = function(){
            var matchedRoute = _this.getMatchedRoute();
            _this.setState({match: matchedRoute});
        };
    },
    getMatchedRoute: function(){
        var match;
        var currentUrl = utils.getCurrentLocation();
        var routes = this.props.children;
        if(Array.isArray(routes)){
            match = routes.filter(utils.match.bind(null, currentUrl));
        }else{
            match = [utils.match(currentUrl, routes) ? routes : null];
        }
        return match ? match[0] : null;
    },
    render: function() {
        if(this.state.match){
          return this.transferPropsTo(React.DOM.div(null, this.state.match.component({})));
        }else{
          return (<span>Not Found :(</span>);
        }
    }
});

module.exports = Router;
