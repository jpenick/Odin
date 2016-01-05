/* Euler Problems
	The code is, I'm sure, rife with bad style,
	chief among these being rampant code duplication and
	massive comments,
	but code first, optimization later!

	Edit: Optibots! Transform and roll out!
*/
var initProb = function(pNum,pFun){
	//init globals
	var pBox = document.getElementById(pNum+"Box");
	var pButt = document.getElementById(pNum+"Butt");
	var pTxt = document.getElementById(pNum+"Txt");

	var pResBox = document.createElement("div");
	pResBox.setAttribute("id",pNum+"resBox");
	pResBox.setAttribute("class","res");
	//var pResBox = document.getElementById(pNum+"resBox");

	//add onclick function
	pButt.onclick = function(){
		pResBox.innerHTML = 'Result: '+pFun(pTxt.value);
		pBox.appendChild(pResBox);
	}
}

window.onload = function(){

	//PROBLEM 1
	initProb("p1",prob1);

	//PROBLEM 2
	initProb("p2",prob2);

	//PROBLEM 3
	initProb("p3",prob3);
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
	// we'll try a straightforward method,
	// we can optimize it later if we want

	// 1) generate a list of factors
	var fs= [];
	// for factors, you only need to check up to the sqrt
	// since they come in pairs, you can divide for the rest
	for (var i=0; i<=Math.floor(Math.sqrt(n)); i++) {
		if(n%i == 0){
			fs.push(i);
			fs.push(n/i);
		}
	};
	//sort it (reversed) to make it easy
	fs.sort(function(a,b){return b-a;});
	//console.log("fs: "+fs);

	// 2) Now get the largest prime!
	// some contingencies:
	var kingPrime = 1;
	if(n%2==0){
		kingPrime = 2;
	};

	//we even test n (it might be a prime itself!)
	for (var i=0; i<=fs.length; i++) {
		//console.log("factor: "+fs[i]+"\n    isPrime: "+isPrime(fs[i]));
		if(isPrime(fs[i])){
			// fs is ordered largest to smallest
			// so the first prime is the biggest prime
			kingPrime = fs[i];
			break;
		}
	};

	return kingPrime;
}

// a friendly, neighborhood primality tester
var isPrime = function(num) {
	//console.log("num: "+num);
	// the sqrt of primes under 10 are less'n 3,
	// if we try to run them through the loop
	// the loop will be skipped!
	// so jump out if we meet them.
	if(num==2 || num==3 || num==5 || num==7){
	//	console.log("\tnum is 2,3,5, or 7");
		return true;

	} else if((num<2) || num%2==0){ //prolly 1 or even
	//	console.log("\tnum is less'n 2 or even");
		return false;

	} else {
		//check against all odds (well, all the ones that matter)
	//	console.log("\tnum is odd")
		// start loop on 3, the next eligible prime
		for (var i=3; i<=Math.floor(Math.sqrt(num)); i+=2){
	//		console.log("\ttesting...");
			if(num%i==0){
				//bested by the odds :(
	//				console.log("\t\t not prime \n\t\t\tdivisible by: "+i);
				return false;
			}
		}
		//overcame the odds! :D
	//	console.log("\t\tand prime");
		return true;
	}
}