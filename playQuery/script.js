$(document).ready(function(){
	var gB = $('#gridBox');

	/* You've got to delegate the event to someone
		who'll stick around. The .gridDivs all 
		get destroyed by the button, but the gridBox
		marches on, so gB is the keeper of the event
		for the .gridDivs.
	*/
	// draw stuff
	gB.on('mouseenter', '.gridDiv', function() {
		$(this).addClass('filled');
	});

	/* Splitting the for loops and selecting outside the loops
		makes the whole thing a smidgeon faster. I still recommend
		moving your cursor slowly, though.
	*/
	// make a cool grid
	var newGrid = function(r,c){
		for (var i=0; i<r; i++) {
			//jQuery scrubs such as I must build from scratch
			gB.append('<div class="gridRow"></div>')
		};
		var gR = $('.gridRow')
		for (var i=0; i<c; i++) {
			gR.append('<div class="gridDiv"></div>');
		};
	}
	newGrid(16,16);

	// shake the etch-a-sketch (erase, prompt for resizing)
	$('button').click(function() {
		gB.empty();
		var n = prompt("How many square pixels?","30");
		newGrid(n,n);
	});

});