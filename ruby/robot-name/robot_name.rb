class Robot
  attr_accessor :name
  @@current_name = 'AA000'
  def initialize
    reset
  end

  def reset
    @name = @@current_name
    @@current_name = @@current_name.next
  end
end
