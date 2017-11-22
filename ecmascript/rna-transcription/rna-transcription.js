class Transcriptor {
  toRna(dna) {
    let dnaChars = [...dna];
    if (dnaChars.every(elem => this.conversionMap().has(elem))) {
      var rnaChars = dnaChars.map(function(dnaChar) {
        return this.charConvert(dnaChar);
      }, this);
      return rnaChars.join('');
    } else {
      throw new Error('Invalid input DNA.');
    }
  }

  conversionMap(dna) {
    var map = new Map()
    map.set('G', 'C')
    map.set('C', 'G')
    map.set('T', 'A')
    map.set('A', 'U')
    return map;
  }

  charConvert(dnaChar) {
    return this.conversionMap().get(dnaChar);
  }
}

export default Transcriptor;
