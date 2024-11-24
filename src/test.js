

function fun () {"use strict";  console.log("sec strict test", this);}

function sec () {
	// "use strict"; 
	// with statement not allowed in strict mode
// with({x: function() {console.log(this);}}) {
// 	x();
// }
// fun();	
}

sec();