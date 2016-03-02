require 'pry'

class Phrase
  VERSION = 1
  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    strip_quotes = @phrase.gsub(/ '|' /, ' ')
    word_array = strip_quotes.downcase.scan(/[\w']+/)
    grouped = word_array.group_by { |word| word }
    counted = {}
    grouped.each { |k, v| counted[k] = v.length }
    counted
  end
end
