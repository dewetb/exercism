class Transcriptor {
  toRna(dna) {
//    return this.transMap(dna);
    let dnaChars = [...dna];
//    console.log(this.transMap().has('G'));
//    console.log(dnaChars.every(elem => this.transMap().keys().indexOf(elem) > -1));
    if (dnaChars.every(elem => this.transMap().has(elem))) {
      var rnaChars = dnaChars.map(function(dnaChar) {
        return this.charConvert(dnaChar);
      }, this);
      return rnaChars.join('');
    } else {
      throw new Error('Invalid input DNA.');
    }
  }

  transMap(dna) {
    var map = new Map()
    map.set('G', 'C')
    map.set('C', 'G')
    map.set('T', 'A')
    map.set('A', 'U')
    return map;
  }

  charConvert(dna) {
    return this.transMap().get(dna);
  }
}

export default Transcriptor;
