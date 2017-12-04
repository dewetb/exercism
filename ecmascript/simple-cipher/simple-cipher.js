class Cipher {
  constructor(key='bcbbbbbbbb') {
    if (key === key.toUpperCase()) {
      throw new Error('Bad key');
    } else {
      this.key = key;
    }
  }

  numKey() {
    let keyArr = [...this.key]
    return keyArr.map(function(keyChar) {
      return this.letterToNumber(keyChar);
    }, this);
  }

  encode(plain) {
    return this.convert(plain, this.shiftEncode.bind(this));
  }

  decode(code) {
    return this.convert(code, this.shiftDecode.bind(this));
  }

  shiftDecode(inputNum, index) {
    return inputNum - this.numKey()[index];
  }

  shiftEncode(inputNum, index) {
    return inputNum + this.numKey()[index];
  }

  convert(input, shiftFunction) {
    let inputArr = [...input]
    let outputArr = inputArr.map(function(inputChar, index) {
      let inputNum = this.letterToNumber(inputChar);
      let outputNum = shiftFunction(inputNum, index);
      return this.numberToLetter(outputNum);
    }, this);
    return outputArr.join('');
  }

  letterToNumber(letter) {
    return letter.charCodeAt(0) - 97
  }

  numberToLetter(number) {
    return String.fromCharCode(97 + number);
  }
}

export default Cipher;
