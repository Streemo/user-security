Package.describe({
  name: 'streemo:user-security',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Protects profile field in Meteor's default user collection",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Streemo/user-security.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use(['ecmascript','accounts-base'], 'server')
  api.mainModule('security.js', 'server');
});
