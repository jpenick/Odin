/* Euler Problems
	The code is, I'm sure, rife with bad style,
	chief among these being rampant code duplication and
	massive comments,
	but code first, optimization later!
*/

window.onload = function(){
	//PROBLEM 1
	//init globals
	var p1Box = document.getElementById("p1Box");
	var p1Butt = document.getElementById("p1Butt");
	var p1Txt = document.getElementById("p1Txt");
	var p1resBox = document.getElementById("p1resBox");

	//add onclick function
	p1Butt.onclick = function(){
		p1result = prob1(p1Txt.value);
		p1resBox.innerHTML = 'Result: '+p1result;
	}

	//PROBLEM 2
	//init globals
	var p2Box = document.getElementById("p2Box");
	var p2Butt = document.getElementById("p2Butt");
	var p2Txt = document.getElementById("p2Txt");
	var p2resBox = document.getElementById("p2resBox");

	//add onclick function
	p2Butt.onclick = function(){
		p2result = prob2(p2Txt.value);
		p2resBox.innerHTML = 'Result: '+p2result;
	}

	//PROBLEM 3
	//init globals
	var p3Box = document.getElementById("p3Box");
	var p3Butt = document.getElementById("p3Butt");
	var p3Txt = document.getElementById("p3Txt");
	var p3resBox = document.getElementById("p3resBox");

	//add onclick function
	p3Butt.onclick = function(){
		p3result = prob3(p3Txt.value);
		p3resBox.innerHTML = 'Result: '+p3result;
	}
}
}


/* Problem 1
If we list all the natural numbers below 10 that are multiples
 of 3 or 5, we get 3, 5, 6 and 9. 
 The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
var prob1 = function(n){
	var sum = 0;
	for (var i=0; i<n; i++) {
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
var prob2 = function(n){
	var a = 0;
	var b = 1;
	var f = 1; //the fib
	var sum = 0; //the sum of the even fibs
	while (f < n) {
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

/* Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/
var prob3 = function(n){
	//find [prime] factors of n
	//koth for largest factor
}