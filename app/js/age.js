// REQUIRE FOR MOMENT.JS //
var moment = require('moment');
//moment().format(); <-- CAME WITH THE PROVIDED EXAMPLES BUT APPEARS UNNECESSARY //
 

 dob = function(){
		var now = moment();
		var userdob = document.getElementById('dob').value;
		var ydiff = now.diff(userdob, 'years');
		alert(ydiff);
		if (ydiff >= 18){
			window.location.href = "livesearch.html";
		}
		else{
			alert('failure');
		}

}

module.exports = {
 dob: dob
}
