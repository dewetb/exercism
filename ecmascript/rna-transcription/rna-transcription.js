class Transcriptor {
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
    return (dnaChars.every(elem => this.conversionMap().has(elem)))
  }

  convertString(dnaChars) {
    return dnaChars.map(function(dnaChar) {
      return this.convertChar(dnaChar);
    }, this);
  }

  conversionMap(dna) {
    var map = new Map()
    map.set('G', 'C')
    map.set('C', 'G')
    map.set('T', 'A')
    map.set('A', 'U')
    return map;
  }

  convertChar(dnaChar) {
    return this.conversionMap().get(dnaChar);
  }
}

export default Transcriptor;
