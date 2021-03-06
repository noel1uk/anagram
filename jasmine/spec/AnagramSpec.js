describe('Anagram', function() {
  let anagram = new Anagram()

  describe('knownWords', function() {

    it('initializes with an empty array', function() {
      expect(anagram.knownWords).toEqual([]);
    });
  });


  // This test now seems unnecessary as the pushNewWord function is used in the "when a word has 
  // been added to `knownWords' describe block"
  // 
  describe('.pushNewWord', function() {

    beforeEach(function() {
      anagram.pushNewWord('door');
    });

    afterEach(function() {
      anagram.knownWords = [];
    });
    
    it('adds new words to `knownWords`', function() {
      expect(anagram.knownWords).toContain('door');
    });
  });

  describe('when a word has been added to `knownWords', function() {
    
    beforeEach(function() {
      anagram.pushNewWord('word');
    });
  
    afterEach(function() {
      anagram.knownWords = [];
    });

    describe('.find', function() {
  
      it('finds words that contain the same letters as given work', function() {
        expect(anagram.find('drow')).toEqual(['word']);
      });

    });

    describe('.reset', function() {

      beforeEach(function() {
        anagram.reset();
      });

      it('resets `matchedWords` to empty array', function() {
        anagram.reset
        expect(anagram.matchedWords).toEqual([]);
      });
    });
  });


});