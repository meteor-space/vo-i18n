
Language = Space.messaging.Serializable.extend('Language', {

  Constructor: function(data) {
    var code = (data && data.code) ? data.code : data;

    if(!Language.isValid(code)) {
      throw new Error(Language.ERRORS.invalidLanguageCode(code));
    }

    Space.messaging.Serializable.call(this, { code: code });
    Object.freeze(this);
  },

  equals: function(other) {
    return (other instanceof Language) && other.code === this.code;
  },

  toString: function() {
    return this.code;
  }

});

// Register as EJSON type
Language.type('Language');

// EJSON serializable fields
Language.fields = {
  code: String
};

Language.ERRORS = {
  invalidLanguageCode: function(code) {
    return "Invalid language code '" + code + "' given.";
  }
};

Language.isValid = function (code) {
  return Language.ISO_LANGUAGE_CODES.indexOf(code) > -1;
};

Language.ISO_LANGUAGE_CODES = [
  'om', 'ab', 'aa', 'af', 'sq', 'am', 'ar', 'hy', 'as', 'ay', 'az', 'ba',
  'eu', 'bn', 'dz', 'bh', 'bi', 'br', 'bg', 'my', 'be', 'km', 'ca', 'zh',
  'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'fo', 'fj', 'fi', 'fr',
  'fy', 'gl', 'ka', 'de', 'el', 'kl', 'gn', 'gu', 'ha', 'he', 'hi', 'hu',
  'is', 'id', 'ia', 'ie', 'ik', 'iu', 'ga', 'it', 'ja', 'jw', 'kn', 'ks',
  'kk', 'rw', 'ky', 'rn', 'ko', 'ku', 'lo', 'la', 'lv', 'ln', 'lt', 'mk',
  'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mo', 'mn', 'na', 'ne', 'no', 'oc',
  'or', 'ps', 'fa', 'pl', 'pt', 'pa', 'qu', 'rm', 'ro', 'ru', 'sm', 'sg',
  'sa', 'Ga', 'gd', 'sr', 'sh', 'st', 'tn', 'sn', 'sd', 'si', 'ss', 'sk',
  'sl', 'so', 'es', 'su', 'sw', 'sv', 'tl', 'tg', 'ta', 'tt', 'te', 'th',
  'bo', 'ti', 'to', 'ts', 'tr', 'tk', 'tw', 'ug', 'uk', 'ur', 'uz', 'vi',
  'vo', 'cy', 'wo', 'xh', 'yi', 'yo', 'za', 'zu'
];
