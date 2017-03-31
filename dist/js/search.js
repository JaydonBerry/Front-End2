var $livesearch = $("#livesearch");

	var gWhiskey;

	getWhiskeyData = function(){
		$.getJSON("js/whiskey.json", function(whiskey){
            gWhiskey = whiskey;
	    });
	}

	searchWhiskeys = function(search_term){
		$livesearch.empty();
		var searchResults = [];
		$.grep(gWhiskey, function(result, i){
			if(result.whiskey_name.toLowerCase().indexOf(search_term.toLowerCase()) !== -1){
				searchResults.push(result);
			}

		});
		return searchResults;
	}

module.exports = {
	getWhiskeyData: getWhiskeyData,
	searchWhiskeys: searchWhiskeys
}