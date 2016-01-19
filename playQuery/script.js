$(document).ready(function(){
	var $gB = $('#gridBox');
	//16x16 grid divs, new lines inline-block
	var newGrid = function(r,c){
		for (var i=0; i<c; i++) {
			//jQuery scrubs such as I must build from scratch
			$gB.append('<div class="gridRow" id="gR'+i+'"></div>')
			for (var j=0; j<r; j++) {
				$('#gR'+i).append('<div class="gridDiv"></div>');
			};
		};
	}
	newGrid(16,16)
	
	$('.gridDiv').mouseenter(function() {
		$(this).addClass('filled');
	});
});