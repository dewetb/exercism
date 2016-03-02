class Phrase
  VERSION = 1
  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    commas_to_space = @phrase.gsub(',', ' ')
    strip_quotes = commas_to_space.gsub(/ '|' /, ' ')
    strip_punctuation = strip_quotes.downcase.gsub(/[^a-z0-9'\s]/i, '')
    word_array = strip_punctuation.split(/[\s, ]/)
    no_empties = word_array.reject { |s| s.empty? }
    grouped = no_empties.group_by { |word| word }
    counted = {}
    grouped.each { |k, v| counted[k] = v.length }
    counted
  end
end
