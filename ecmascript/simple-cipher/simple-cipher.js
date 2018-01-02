class Cipher {
  constructor() {
    this.key = "bbbbbbbbbbbbbb";
    this.keyArrNumbers = this.key.split('').map(letter => this.letterToNumber(letter));
  }

  encode(plain) {
    let plainArr = plain.split('');
    let encodedArr = plainArr.map(function(char, index) {
      let inputNum = this.letterToNumber(char);
      let diff = this.keyArrNumbers[index];
      let outputLetter = this.numberToLetter(inputNum + diff)
      return outputLetter;
    }, this)
    return encodedArr.join('');
  }

  letterToNumber(letter) {
    return letter.charCodeAt(0) - 97;
  }

  numberToLetter(number) {
    return String.fromCharCode(97 + number);
  }
}

export default Cipher;
