class Grains
  def self.square(n)
    2 ** (n - 1)
  end

  def self.total
    (1..64).reduce { |sum, n| sum + Grains.square(n) }
  end
end
