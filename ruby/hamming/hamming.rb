class Hamming
  def self.compute(a, b)
    zipped = a.chars.zip(b.chars)
    zipped.inject(0) do |sum, set|
      sum += 1 if set[0] != set[1]
      sum
    end
  end
end
