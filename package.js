
Package.describe({
  summary: 'Value Objects for i18n domains.',
  name: 'space:vo-i18n',
  version: '0.1.0',
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.0');

  api.use([
    'check',
    'space:messaging@1.6.0'
  ]);

  api.add_files([
    'source/language.js',
    'source/country.js',
  ]);

  api.export('Language');
  api.export('Country');

});

Package.onTest(function(api) {

  api.use([
    'check',
    'space:vo-i18n',
    'practicalmeteor:munit@2.1.5',
    'space:testing@1.3.0',
  ]);

  api.add_files([
    'tests/language.unit.js',
    'tests/country.unit.js',
  ]);

});
