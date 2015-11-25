class Year
  VERSION = 1
  def self.leap?(year)
    if year % 100 == 0 && year % 400 == 0
      true
    elsif year % 4 == 0 && year % 100 != 0 
      true
    end
  end
end
