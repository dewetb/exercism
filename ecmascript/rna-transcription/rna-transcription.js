class Transcriptor {
  toRna(dna) {
//    return this.transMap(dna);
    let chars = [...dna];
    return chars.map(function(dnaChar) {
      return this.transMap(dnaChar)
    });
  }

  transMap(dna) {
    var map = new Map()
    map.set('G', 'C')
    map.set('C', 'G')
    map.set('T', 'A')
    map.set('A', 'U')
    return map.get(dna);
  }
}

export default Transcriptor;
