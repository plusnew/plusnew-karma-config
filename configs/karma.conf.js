/* globals module */
const path = require('path');

module.exports = (projectDirectory, webpackConfig) =>
  config => {
    const webpack = {
      ...webpackConfig,
      output: undefined
    };

    config.set({
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: path.join(projectDirectory, 'test'),

      // sets the config for compiling webpack
      webpack,
      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine'],

      // list of files / patterns to load in the browser
      files: [
        '**/*.spec.ts',
        '**/*.spec.tsx',
      ],

      // list of files to exclude
      exclude: [],

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
        '**/*.spec.ts': ['webpack', 'sourcemap'],
        '**/*.spec.tsx': ['webpack', 'sourcemap'],
      },

      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress', 'coverage-istanbul'],

      coverageIstanbulReporter: {
        reports: ['html', 'lcov', 'text-summary'],
        dir: 'coverage/report',
      },

      // web server port
      port: 9876,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,

      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['ChromeHeadless'],

      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false,

      plugins: [
        'karma-webpack',
        'karma-jasmine',
        'karma-sourcemap-loader',
        'karma-coverage-istanbul-reporter',
        'karma-chrome-launcher',
      ],

      // Concurrency level
      // how many browser should be started simultaneous
      concurrency: Infinity,
    });
};
