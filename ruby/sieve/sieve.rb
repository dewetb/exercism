class Sieve
  attr_reader :primes
  def initialize(n)
    @primes = 2.upto(n).to_a
    @primes.each do |i|
      @primes.reject! { |j| j % i == 0 && j > i }
    end
  end
end
