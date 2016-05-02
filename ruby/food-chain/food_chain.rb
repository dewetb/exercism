require 'pry'

class FoodChain
  VERSION = 2
  ANIMALS = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse']
  POST_SWALLOW = [
    "",
    "It wriggled and jiggled and tickled inside her.\n",
    "How absurd to swallow a bird!\n",
    "Imagine that, to swallow a cat!\n",
    "What a hog, to swallow a dog!\n",
    "Just opened her throat and swallowed a goat!\n",
    "I don't know how she swallowed a cow!\n",
    "She's dead, of course!\n"
  ]

  def self.song
    song = ""
    0.upto(7) do |i|
      song << i_know(i)
      song << post_swallow(i)
      song << explanation(i)
      song << "I don't know why she swallowed the fly. Perhaps she'll die.\n\n"
    end
    song
  end

  def self.i_know(i)
    "I know an old lady who swallowed a #{ANIMALS[i]}.\n"
  end

  def self.post_swallow(i)
    POST_SWALLOW[i]
  end

  def self.explanation(i)
    explanation = ""
    if i > 0 && i < 7
      i.downto(1) do |n|
        explanation << "She swallowed the #{ANIMALS[n]} to catch the #{ANIMALS[n - 1]}"
	explanation << " that wriggled and jiggled and tickled inside her" if n == 2
	explanation << ".\n"
      end
    end
    explanation
  end
end
