var filterLocationFromHash = function(hash){
	var re = /#!(.*)$/;
	var res = hash.match(re);
	if(res){
		return res[1];
	}else{
		return "";
	}

};

var getCurrentLocation = function(){
	return filterLocationFromHash(window.location.hash);
};

module.exports = {
	getCurrentLocation: getCurrentLocation
};
