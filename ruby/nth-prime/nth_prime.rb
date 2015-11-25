class Prime
  def self.nth(n)
    raise ArgumentError if n == 0
    primes = []
    i = 1
    until primes.length == n
      i += 1
      primes << i if Prime.prime?(i)
    end
    primes.last
  end

  def self.prime?(n)
    for i in 2..(n - 1)
      return false if n % i == 0
    end
    true
  end
end
