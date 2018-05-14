describe('Anagram', function() {

  let anagram = new Anagram()
  it('initializes with an empty array', function() {
    expect(anagram.knownWords).toEqual([]);
  });
});