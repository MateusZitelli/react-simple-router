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
            match = routes.filter(function(route){
              return route.match(currentUrl);
            });
        }else{
            match = [routes.match(currentUrl)];
        }
        return match ? match[0] : null;
    },
    render: function() {
        if(this.state.match){
          var renderedComponent = this.state.match.component(this.state.match.props);
          return this.transferPropsTo(React.DOM.div(null, renderedComponent));
        }else{
          return (<span>Not Found :(</span>);
        }
    }
});

module.exports = Router;
