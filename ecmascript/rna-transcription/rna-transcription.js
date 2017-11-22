class Transcriptor {
  constructor() {
    this.conversionMap = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U',
    }
  }

  toRna(dna) {
    let dnaChars = [...dna];
    if (this.validInput(dnaChars)) {
      var rnaChars = this.convertString(dnaChars);
      return rnaChars.join('');
    } else {
      throw new Error('Invalid input DNA.');
    }
  }

  validInput(dnaChars) {
    return (dnaChars.every(elem => (elem in this.conversionMap)))
  }

  convertString(dnaChars) {
    return dnaChars.map(function(dnaChar) {
      return this.conversionMap[dnaChar];
    }, this);
  }
}

export default Transcriptor;
