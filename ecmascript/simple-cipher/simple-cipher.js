class Cipher {
  constructor() {
    this.key = 'bcbbbbbbbb'
  }

  numKey() {
    let keyArr = [...this.key]
    return keyArr.map(function(keyChar) {
      return this.letterToNumber(keyChar);
    }, this);
  }

  encode(plain) {
    let plainArr = [...plain]
    let encryptedArr = plainArr.map(function(plainChar, index) {
      let plainNum = this.letterToNumber(plainChar);
      let encryptedNum = plainNum + this.numKey()[index];
      return this.numberToLetter(encryptedNum);
    }, this);
    return encryptedArr.join('');
  }

  decode(input) {
    let inputArr = [...input]
    let outputArr = inputArr.map(function(inputChar, index) {
      let inputNum = this.letterToNumber(inputChar);
      let outputNum = inputNum - this.numKey()[index];
      return this.numberToLetter(outputNum);
    }, this);
    return outputArr.join('');
  }

  convert(input) {
    let inputArr = [...input]
    let outputArr = inputArr.map(function(inputChar, index) {
      let inputNum = this.letterToNumber(inputChar);
      let outputNum = inputNum - this.numKey()[index];
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
