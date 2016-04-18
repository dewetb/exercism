class Hamming
  def self.compute(a, b)
    count = 0
    a.length.times do |i|
      count += 1 unless a[i] == b[i]
    end
    count
  end
end
