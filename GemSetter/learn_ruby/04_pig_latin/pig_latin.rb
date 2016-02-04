def translate(phrase)
	vowels = "aeiou"
	phrase.split.map { |w|
		case w
		when /\A[aeiou]/						#vowel first
			w = w+"ay"
		when /\A[^aeiouq][aeiou]/				#con then vow
			w = w[1..w.length]+w[0]+"ay"
		when /\A[^aeiouq]{2}[aeiou]/, /\Aqu/	#2 cons or qu
			w = w[2..w.length]+w[0..1]+"ay"
		when /\A[^aeiouq]{3}/, /\A[^aeiou]qu/	#3 cons or cons+qu
			w = w[3..w.length]+w[0..2]+"ay"
		end
		if w.match(/[A-Z]/) != nil
			w = w.downcase.capitalize
		end
		w
	}.join(" ")
end