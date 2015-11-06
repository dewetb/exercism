class Fixnum
  DIGIT_TO_R = {
    1 => "I",
    2 => "II",
    3 => "III",
    4 => "IV",
    5 => "V",
    9 => "IX",
    10 => "X"
  }

  DIGITS = [1, 2, 3, 4, 5, 9, 10]

  def to_roman
    
    DIGIT_TO_R[self]
  end
end


=begin
Check for largest number
If the number is larger, equal to or one of the next smaller
Run that digit
put it in the string
Take the remainder & repeat
=end