describe("Country", function() {

  beforeEach(function() {
    this.austria = new Country('AT');
  });

  it('is serializable', function() {
    var copy = EJSON.parse(EJSON.stringify(this.austria));
    expect(copy.equals(this.austria)).to.be.true;
  });

  describe('construction', function() {

    it('takes a country code and assigns it', function() {
      expect(this.austria.code).to.equal('AT');
    });

    it('throws error if invalid country code is assigned', function() {
      expect(function() {
        new Country('XX');
      }).to["throw"]("Invalid country code 'XX'");
    });

  });

  describe('country code validation', function() {

    it('returns true for any valid country code', function() {
      for (var i = 0, len = Country.ISO_COUNTRY_CODES.length; i < len; i++) {
        var code = Country.ISO_COUNTRY_CODES[i];
        expect(Country.isValidCountryCode(code)).to.be.true;
      }
    });

  });

  describe('checking for european countries', function() {

    it('returns true for any European country code', function() {
      for (var i = 0, len = Country.EUROPEAN_COUNTRIES.length; i < len; i++) {
        var code = Country.EUROPEAN_COUNTRIES[i];
        expect(Country.isEuropean(code)).to.be.true;
      }
    });

    it('returns true if it is an european country', function() {
      for (var i = 0, len = Country.EUROPEAN_COUNTRIES.length; i < len; i++) {
        var code = Country.EUROPEAN_COUNTRIES[i];
        var country = new Country(code);
        expect(country.isEuropean()).to.be.true;
      }
    });

  });

  describe('immutability', function() {

    it('freezes itself', function() {
      expect(Object.isFrozen(this.austria)).to.be.true;
    });

  });
});
