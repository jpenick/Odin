def echo(msg)
	msg.to_s #probably don't need to stringify, but better safe
end

def shout(msg)
	msg.to_s.upcase
end

def repeat(msg,n = 2)
	((msg+" ")*n).strip
end

def start_of_word(word,i)
	word[0..i-1]
end

def first_word(phrase)
	(phrase.split)[0]
end

def titleize(phrase)
	lws = ["a","an","and","for","in","on","over","the","with"] #"little words"
	capped = (phrase.split).each do |w| 
		if !lws.include?(w.downcase)
			w.capitalize!
		end
	end
	capped[0].capitalize!
	capped.join(" ")
end