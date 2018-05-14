describe('Anagram', function() {

  let anagram = new Anagram()


  it('initializes with an empty array', function() {
    expect(anagram.knownWords).toEqual([]);
  });

  describe('.pushNewWord', function() {
    it('adds new words to `knownWords`', function() {
      anagram.pushNewWord('word');
      expect(anagram.knownWords).toContain('word');
    });
  });
});