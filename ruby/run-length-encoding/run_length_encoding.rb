class RunLengthEncoding
  VERSION = 1
  def self.encode(plain)
    encoded = ''
    run = {character: plain[0], count: 1}
    plain.reverse.chop.reverse.chars.each do |c|
      if run[:character] == c
	run[:count] += 1
      else
	encoded << run[:count].to_s if run[:count] > 1
	encoded << run[:character]
	run[:character] = c
	run[:count] = 1
      end
    end
    encoded << run[:count].to_s if run[:count] > 1
    encoded << run[:character]
    encoded
  end

  def self.decode(encrypted)
    decoded = ''
    sets = encrypted.split(/(?<=\D)/)
    sets.each do |set|
      decoded << (set[-1])*(set.chop.to_i)
      decoded << set if set.length == 1
    end
    decoded
  end
end
