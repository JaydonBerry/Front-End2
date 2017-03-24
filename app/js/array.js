var whiskeys;

	whiskeyArray = function(){
		$.getJSON("js/whiskey.json", function(whiskey){
            whiskeys = whiskey;
	    });
	}
module.exports = {
	whiskeyArray: whiskeyArray
}