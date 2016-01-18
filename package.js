
Package.describe({
  name: 'space:vo-i18n',
  summary: 'Value Objects for i18n domains.',
  version: '0.1.0',
  git: 'https://github.com/meteor-space/vo-i18n.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.0');

  api.use([
    'check',
    'ecmascript',
    'space:domain@0.1.0'
  ]);

  api.addFiles([
    'source/language.js',
    'source/country.js'
  ]);

  api.export('Language');
  api.export('Country');

});

Package.onTest(function(api) {

  api.use([
    'ecmascript',
    'check',
    'ejson',
    'space:vo-i18n',
    'practicalmeteor:munit@2.1.5',
    'space:testing@2.0.1'
  ]);

  api.addFiles([
    'tests/language.unit.js',
    'tests/country.unit.js'
  ]);

});
