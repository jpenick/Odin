$(document).ready(function(){
	var $gB = $('#gridBox');

	//16x16 grid divs, new lines inline-block
	for (var i=0; i<16; i++) {
		//jQuery scrubs such as I must build from scratch
		$gB.append('<div class="gridRow" id="gR'+i+'"></div>')
		for (var j=0; j<16; j++) {
			$('#gR'+i).append('<div class="gridDiv"></div>');
		};
	};
	
	$('.gridDiv').mouseenter(function() {
		$(this).addClass('filled');
	});
});