require 'pry'

class Phrase
  VERSION = 1
  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    strip_quotes = @phrase.gsub(/ '|' /, ' ')
    word_array = strip_quotes.downcase.scan(/[\w']+/)
    counted = Hash.new(0)
    word_array.each do |word|
      counted[word] += 1
    end
    counted
  end
end
