var whiskeySearch = require('./search.js');
var age = require('./age.js');
import 'style-loader!../css/dobchanges.css';

$(document).ready(function(){


	var $search_box = $("#searchBox");
	var $livesearch = $("#livesearch");

    	var valString = function(str) {
		if(str==="")
		{
			return false;
		}
		return true;
		}

		var searchFunction = function(){
			// SEARCHBOX WATCH //
			$search_box.keydown(function(e){
				// CALL SEARCH FUNCTION //
				search();
			});
		}

		var search = function()
		{
			var $search_val = $search_box.val().toLowerCase();
			if(valString($search_val))
			{
				var searchedWhiskey = whiskeySearch.searchWhiskeys($search_val.toLowerCase());
				console.log(searchedWhiskey);
				output(searchedWhiskey);
			}
		}

		var output = function(searchResults){
			 $.each(searchResults, function(index, whiskeyResult) {
				var $result = $("<a href='additional.html'><li class='store_search_det'>"+whiskeyResult.whiskey_name+"</a>").click(sendWhiskey(whiskeyResult));
				$livesearch.prepend($result);
			 });
		}

		var sendWhiskey = function(whiskey)
		{
			return function () {
				if(typeof(localStorage != undefined))
				{
					//Send that whiskey details to local storage
					localStorage.setItem('whiskeys', JSON.stringify(whiskey))
					displayWhiskey();
				}
			}
		}

		var displayWhiskey = function()
		{
			if(localStorage.getItem('whiskeys') != null)
			{
				// BIND JSON ELEMEMENTS //
				var whiskey = $.parseJSON(localStorage.getItem('whiskeys'));
				var name = whiskey.whiskey_name;
				var desc = whiskey.description;
				var store = whiskey.store;
				var price = whiskey.store_price;
				var url = whiskey.store_url;
				// APPEND ELEMENTS TO PAGE //
				$(".page-header").append(desc);
				$(".price").append(name + " " +price);
				$(".buy-btn").attr("href", url);
				$(".business-name").append(store);
				// CALL MAP FUNCTION //
				initMap(whiskey)
			}
		}

		var initMap = function(stores)
		{
			// BIND CO-ORDS FROM JSON //
			var store_loc = {lat: stores.lat, lng: stores.lng};
			var map = new google.maps.Map($("#map")[0], {
		          zoom: 15,
		          center: store_loc
	        });
	        // MAP MARKERS //
		        var marker = new google.maps.Marker({
		          position: store_loc,
		          map: map
		        });
		}



		var init = function()
		{
			$search_box.focus();
			whiskeySearch.getWhiskeyData();
			searchFunction();
			displayWhiskey();
		}

		init();
		window.initMap = initMap;
});