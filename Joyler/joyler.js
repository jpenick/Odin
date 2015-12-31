/* Euler Problems
	The code is, I'm sure, rife with bad style,
	chief among these being rampant code duplication and
	massive comments,
	but please forgive me, as I am new.
*/

window.onload = function(){
	//PROBLEM 1
	//init globals
	var p1Box = document.getElementById("p1Box");
	var p1Butt = document.getElementById("p1Butt");

	//add onclick function
	p1Butt.onclick = function(){
		p1result = prob1();
		p1Box.innerHTML += p1result;
	}

	//PROBLEM 2
	//init globals
	var p2Box = document.getElementById("p2Box");
	var p2Butt = document.getElementById("p2Butt");

	//add onclick function
	p2Butt.onclick = function(){
		p2result = prob2(4000000);
		p2Box.innerHTML += p2result;
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

/* Problem 2
Each new term in the Fibonacci sequence is generated
 by adding the previous two terms.
 By starting with 1 and 2, the first 10 terms will be:

 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence
 whose values do not exceed four million,
  find the sum of the even-valued terms.
*/
var prob2 = function(){
	var a = 0;
	var b = 1;
	var f = 1; //the fib
	var sum = 0; //the sum of the even fibs
	while (f < 4000000) {
		f = a+b;
		//console.log(f+" = "+a+"+"+b);
		if (f%2 == 0) {
			sum+=f;
		};
		a = b;
		b = f;
	};
	return sum;
}