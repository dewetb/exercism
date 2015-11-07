class Fixnum
  DIGIT_TO_R = {
    100 => "C",
    90 => "XC",
    50 => "L",
    40 => "XL",
    10 => "X",
    9 => "IX",
    5 => "V",
    4 => "IV",
    3 => "III",
    2 => "II",
    1 => "I"
  }

  DIGITS = [1, 2, 3, 4, 5, 9, 10]

  def to_roman
    arabic_input = self
    roman_output = ""
    until arabic_input == 0
      DIGIT_TO_R.each do |ar, rom|
        until arabic_input < ar
          roman_output << rom
          arabic_input -= ar
        end
      end
    end
    roman_output
  end
end


=begin
Check for largest number
If the number is larger, equal to or one of the next smaller
Run that digit
put it in the string
Take the remainder & repeat
=end
