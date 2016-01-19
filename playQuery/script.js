$(document).ready(function(){
	var gB = $('#gridBox');

	
	// draw stuff
	$('.gridDiv').mouseenter(function() {
		$(this).addClass('filled');
	});

	//make a cool grid
	var newGrid = function(n){
		for (var i=0; i<n; i++) {
			//jQuery scrubs such as I must build from scratch
			gB.append('<div class="gridRow" id="gR'+i+'"></div>')
			for (var j=0; j<n; j++) {
				$('#gR'+i).append('<div class="gridDiv"></div>');
			};
		};
	}
	newGrid(16);

	//shake the etch-a-sketch
	$('button').click(function() {
		gB.empty();
		var n = prompt("How many square pixels?");
		newGrid(n);
	});

});