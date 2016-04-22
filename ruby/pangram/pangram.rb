class Pangram
  VERSION = 1
  def self.is_pangram?(str)
    str.gsub(/\W|\d|_/, '').downcase.chars.uniq.size == 26
  end
end
