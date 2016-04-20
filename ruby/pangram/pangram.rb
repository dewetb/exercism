class Pangram
  VERSION = 1
  def self.is_pangram?(str)
    str.gsub(/\W/, '').downcase.split('').uniq.size == 26
  end
end
