class Anagram {
  constructor() {
    this.knownWords = [];
    this.matchedWords = []
  }

  pushNewWord(word) {
    this.knownWords.push(word);
  }

  find(word) {
    this.knownWords.forEach(function(knownWord) {
      if (this.wordLengthMatches(word, knownWord)) {
        for ( let i = 0, tempWord = ''; i < word.length; i++ ) {
          if ( this.letterIsInWord(word[i], knownWord) ) {
            if ( i + 1 === word.length ) {
              this.matchedWords.push(knownWord)
            }
          } else {
            break;
          }
        }
      }
    }, this);
    return(this.matchedWords);
  }

  wordLengthMatches(word, knownWord) {
    if ( word.length === knownWord.length ) {
      return true;
    }
  }

  letterIsInWord(letter, knownWord) {
    if ( knownWord.indexOf(letter) > -1 ) {
      return true;
    }
  }

  reset() {
    this.matchedWords = [];
  }
}