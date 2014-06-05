var filterLocationFromHash = function(hash){
	var re = /#!(.*)$/;
	var res = hash.match(re);
	if(res){
		return res[1];
	}else{
		return '';
	}
	
};

var getCurrentLocation = function(){
	return filterLocationFromHash(window.location.hash);
};

var match = function(location, route) {
	return location.match(route.rule) != null;
}


module.exports = {
	getCurrentLocation: getCurrentLocation,
	match: match
};