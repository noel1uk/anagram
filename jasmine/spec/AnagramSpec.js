describe('Anagram', function() {
  let anagram = new Anagram()

  describe('knownWords', function() {

    it('initializes with an empty array', function() {
      expect(anagram.knownWords).toEqual([]);
    });
  });

  describe('.pushNewWord', function() {

    beforeEach(function() {
      anagram.pushNewWord('word');
    });

    afterEach(function() {
      anagram.knownWords = [];
    });

    it('adds new words to `knownWords`', function() {
      expect(anagram.knownWords).toContain('word');
    });
  });
});