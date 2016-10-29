Package.describe({
  name: '3stack:canvas',
  version: '1.6.0_1',
  summary: 'Meteor Package for Server Side Node Canvas',
  git: 'https://github.com/3stack-software/meteor-node-canvas',
  documentation: null
});

Npm.depends({
  'canvas': '1.6.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2.1');
  api.addFiles('canvas.js', 'server');
  api.export('Canvas', 'server');
});
