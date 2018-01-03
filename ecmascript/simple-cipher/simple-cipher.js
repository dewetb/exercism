class Cipher {
  constructor() {
    this.key = "bbbbbbbbbbbbbb";
    this.keyArrNumbers = this.key.split('').map(letter => this.letterToNumber(letter));
  }

  encode(plain) {
    return this.convert(plain, this.numberEncoder.bind(this));
  }

  decode(encoded) {
    return this.convert(encoded, this.numberDecoder.bind(this));
  }

  convert(input, conversionFunc) {
    let encodedArr = input.split('');
    let plainArr = encodedArr.map(function(char, index) {
      let inputNum = this.letterToNumber(char);
      let diff = this.keyArrNumbers[index];
      let outputLetter = conversionFunc(inputNum, diff);
      return outputLetter;
    }, this)
    return plainArr.join('');
  }

  numberDecoder(encodedNum, diff) {
    return this.numberToLetter(encodedNum - diff);
  }

  numberEncoder(decodedNum, diff) {
    return this.numberToLetter(decodedNum + diff);
  }

  letterToNumber(letter) {
    return letter.charCodeAt(0) - 97;
  }

  numberToLetter(number) {
    return String.fromCharCode(97 + number);
  }
}

export default Cipher;
