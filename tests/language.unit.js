describe("Language", function() {

  beforeEach(function() {
    this.code = 'de';
    this.language = new Language(this.code);
  });

  it('is serializable', function() {
    var copy = EJSON.parse(EJSON.stringify(this.language));
    expect(copy.equals(this.language)).to.be.true;
  });

  describe('construction', function() {

    it('takes a language code and assigns it', function() {
      expect(this.language.code).to.equal(this.code);
    });

    it('it only takes valid ISO language codes', function() {
      expect(function() {
        new Language('XX');
      }).to["throw"]("Invalid language code 'XX' given.");
    });

  });

  describe('immutability', function() {

    it('freezes itself', function() {
      expect(Object.isFrozen(this.language)).to.be.true;
    });

  });
});
