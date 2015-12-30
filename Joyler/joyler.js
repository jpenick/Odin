window.onload = function(){
	//init globals
	var p1Box = document.getElementById("p1Box");
	var p1Butt = document.getElementById("p1Butt");

	//add onclick function
	p1Butt.onclick = function(){
		p1result = prob1();
		p1Box.innerHTML += p1result;
	}
}


/* Problem 1
If we list all the natural numbers below 10 that are multiples
 of 3 or 5, we get 3, 5, 6 and 9. 
 The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
var prob1 = function(){
	var sum = 0;
	for (var i=0; i<=1000; i++) {
		if (i%3==0 || i%5==0) {
			sum+=i;
		};
	};
	//console.log(sum);
	return sum;
}
