class Cipher {
  constructor(key='bbbbbbbbbbbbbbbbb') {
    if (key.match(/^[a-z]+$/)) {
      this.key = key;
    } else {
      throw new Error('Bad key');
    }
  }

  keyArrNumbers() {
    return this.key.split('').map(letter => this.letterToNumber(letter));
  }

  wrappedIndex(index) {
    let keyLength = this.keyArrNumbers().length;
    return index % keyLength;
  }

  encode(plain) {
    return this.convert(plain, this.numberEncoder.bind(this));
  }

  decode(encoded) {
    return this.convert(encoded, this.numberDecoder.bind(this));
  }

  convert(input, conversionFunc) {
    let inputArr = input.split('');
    let outputArr = inputArr.map(function(char, index) {
      let inputNum = this.letterToNumber(char);
      let diff = this.keyArrNumbers()[this.wrappedIndex(index)];
      let outputLetter = conversionFunc(inputNum, diff);
      return outputLetter;
    }, this)
    return outputArr.join('');
  }

  numberDecoder(encodedNum, diff) {
    let number = encodedNum - diff
    if (number < 0) {
      return this.numberToLetter(number + 26);
    } else {
      return this.numberToLetter(number);
    }
  }

  numberEncoder(decodedNum, diff) {
    let number = decodedNum + diff
    if (number > 25) {
      return this.numberToLetter(number - 26);
    } else {
      return this.numberToLetter(number);
    }
  }

  letterToNumber(letter) {
    return letter.charCodeAt(0) - 97;
  }

  numberToLetter(number) {
    return String.fromCharCode(97 + number);
  }
}

export default Cipher;
