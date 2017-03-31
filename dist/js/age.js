// REQUIRE FOR MOMENT.JS //
var moment = require('moment');
//moment().format(); <-- CAME WITH THE PROVIDED EXAMPLES BUT APPEARS UNNECESSARY //
 

 dob = function(){
 	// moment() records the current time and date //
	var now = moment();
	var userdob = document.getElementById('dob').value;
	// we can simple suffix .diff(date, params) for accurate differences //
	var ydiff = now.diff(userdob, 'years');
	// alert(ydiff);
	if (ydiff >= 18){
		window.location.href = "livesearch.html";
	}
	else{
		// alert('failure');
		$('.dobwarning').css("visibility", "visible");
		}

	}

module.exports = {
 dob: dob
}
