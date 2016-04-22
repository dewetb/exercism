class Hamming
  def self.compute(a, b)
    zipped = a.chars.zip(b.chars)
    zipped.count { |set| set[0] != set[1] }
  end
end
