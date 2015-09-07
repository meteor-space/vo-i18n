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

  describe('serialization', function() {

    it('defines its EJSON type correctly', function() {
      expect(this.language.toString()).to.equal(this.language.code);
    });

  });

  describe('equality', function() {

    it('s true if language codes are equal', function() {
      var first = new Language('de');
      var second = new Language('de');
      expect(first.equals(second)).to.be.true;
      expect(second.equals(first)).to.be.true;
    });

    it('s false if language codes are different', function() {
      var first = new Language('de');
      var second = new Language('en');
      expect(first.equals(second)).to.be.false;
      expect(second.equals(first)).to.be.false;
      expect(second.equals(null)).to.be.false;
      expect(second.equals({})).to.be.false;
      expect(second.equals(1)).to.be.false;
    });

    it('only accepts other instances of Language class', function() {
      expect(this.language.equals(this.code)).to.be.false;
    });

  });

  describe('immutability', function() {

    it('freezes itself', function() {
      expect(Object.isFrozen(this.language)).to.be.true;
    });

  });
});
