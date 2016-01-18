$(document).ready(function(){
	var $gB = $('#gridBox');
	//16x16 grid divs, new lines inline-block
	for (var i=0; i<16; i++) {
		for (var j=0; j<16; j++) {
			$gB.append('<div class="gridDiv">'+j+','+i+'</div>');
		};
		$gB.append('<br>')
	};
});