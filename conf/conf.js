exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test/*spec.js'],
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
      }
  };