module.exports = function(config) {
  config.set({
    files : [
      'components/angular/angular.js',
      'components/angular-route/angular-route.js',
      'components/angular-mocks/angular-mocks.js',
      'app/scripts/homePages.js',
      'app/scripts/app.js',
      'test/unit/**/*.js'
    ],
    basePath: '../',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: false,
    singleRun: true,
    colors: true
  });
};
