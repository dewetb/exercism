class Squares
  def initialize(n)
    @n = n
  end

  def square_of_sums
   total = 0
   (1..@n).each do |n|
     total += n
   end
   total ** 2
  end

  def sum_of_squares
    total = 0
    (1..@n).each do |n|
      total += n ** 2
    end
    total
  end

  def difference
    square_of_sums - sum_of_squares
  end
end
