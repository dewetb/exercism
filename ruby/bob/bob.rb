require 'pry'
class Bob def hey(remark)
    if remark =~ /\A[^a-z]+\Z/ && remark =~ /[A-Z]+/
      'Whoa, chill out!'
    elsif remark[-1] == '?'
      'Sure.'
    elsif remark =~ /\A\s*\z/
      'Fine. Be that way!'
    else
      'Whatever.'
    end
  end
end
