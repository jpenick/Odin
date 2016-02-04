def add(a,b)
	a+b
end

def subtract(a,b)
	a-b
end

def sum(array)
	if array.empty?
		0	
	else
		array.reduce(:+)
	#Or this:
	# 	array.inject{|sum,x| sum+x}
	end
end

def multiply(*factors)
	factors.reduce(:*)
	#factors.inject{|composite,x| composite*x}
end

def power(base,power)
	base**power
end

def factorial(n)
	if n==0
		1
	else
		(1..n).reduce(:*)
	end
end