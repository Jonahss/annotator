
var request = require('request');
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'saucelabs-mocha': {
      all: {
        options: {
          //username: 'saucelabs-user-name', // if not provided it'll default to ENV SAUCE_USERNAME (if applicable)
          //key: 'saucelabs-key', // if not provided it'll default to ENV SAUCE_ACCESS_KEY (if applicable)
          //sauceConfig: {
          //  'selenium-version': '2.41.0'
          //},
          urls: ['localhost:4000/test/runner.html'],
          build: process.env.CI_BUILD_NUMBER,
          testname: 'AnnotatorJS',
          browsers: [
          // Windows

          // XP
           { platform: 'XP',          browserName: 'internet explorer',        version: '8' }, // Doesn't work, IE8 is broken for Selenium.
          // { platform: 'XP',          browserName: 'firefox',      version: '10' },
          // { platform: 'XP',          browserName: 'firefox',      version: '11' },
          // { platform: 'XP',          browserName: 'firefox',      version: '12' },
          // { platform: 'XP',          browserName: 'firefox',      version: '13' },
          // { platform: 'XP',          browserName: 'firefox',      version: '14' },
          // { platform: 'XP',          browserName: 'firefox',      version: '15' },
          // { platform: 'XP',          browserName: 'firefox',      version: '16' },
          // { platform: 'XP',          browserName: 'firefox',      version: '17' },
          // { platform: 'XP',          browserName: 'firefox',      version: '18' },
          // { platform: 'XP',          browserName: 'firefox',      version: '19' },
          // { platform: 'XP',          browserName: 'firefox',      version: '20' },
          // { platform: 'XP',          browserName: 'firefox',      version: '21' },
          // { platform: 'XP',          browserName: 'firefox',      version: '22' },
          // { platform: 'XP',          browserName: 'firefox',      version: '23' },
          // { platform: 'XP',          browserName: 'firefox',      version: '24' },
          // { platform: 'XP',          browserName: 'firefox',      version: '25' },
          // { platform: 'XP',          browserName: 'firefox',      version: '26' },
          // { platform: 'XP',          browserName: 'firefox',      version: '27' },
          // { platform: 'XP',          browserName: 'firefox',      version: '28' },
          // { platform: 'XP',          browserName: 'firefox',      version: '29' },
          // { platform: 'XP',          browserName: 'firefox',      version: '30' },
          // { platform: 'XP',          browserName: 'firefox',      version: '31' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '26' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '27' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '28' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '29' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '30' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '31' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '32' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '33' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '34' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '35' },
          // { platform: 'XP',          browserName: 'googlechrome', version: '36' },
          // { platform: 'XP',          browserName: 'safari',       version: '3'  },
          // { platform: 'XP',          browserName: 'safari',       version: '4'  },
          // { platform: 'XP',          browserName: 'safari',       version: '5'  },

          // Windows 7
           { platform: 'Windows 7',   browserName: 'internet explorer',        version: '8'  }, // Doesn't work, IE8 is broken for Selenium.
          // { platform: 'Windows 7',   browserName: 'iehta',        version: '9'  },
          // { platform: 'Windows 7',   browserName: 'iehta',        version: '10' },
           { platform: 'Windows 7',   browserName: 'internet explorer',        version: '11' }, // Not available in SL for Selenium.
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '10' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '11' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '12' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '13' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '14' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '15' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '16' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '17' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '18' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '19' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '20' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '21' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '22' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '23' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '24' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '25' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '26' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '27' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '28' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '29' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '30' },
          // { platform: 'Windows 7',   browserName: 'firefox',      version: '31' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '26' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '27' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '28' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '29' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '30' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '31' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '32' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '33' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '34' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '35' },
          // { platform: 'Windows 7',   browserName: 'googlechrome', version: '36' },
          // { platform: 'Windows 7',   browserName: 'safari',       version: '5'  },

          // Windows 8
           { platform: 'Windows 8',   browserName: 'internet explorer',        version: '10' }, // Not available in SL for Selenium.
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '10' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '11' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '12' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '13' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '14' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '15' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '16' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '17' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '18' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '19' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '20' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '21' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '22' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '23' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '24' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '25' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '26' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '27' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '28' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '29' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '30' },
          // { platform: 'Windows 8',   browserName: 'firefox',      version: '31' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '26' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '27' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '28' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '29' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '30' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '31' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '32' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '33' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '34' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '35' },
          // { platform: 'Windows 8',   browserName: 'googlechrome', version: '36' },

          // Windows 8.1
           { platform: 'Windows 8.1', browserName: 'internet explorer',        version: '11' }, // Not available in SL for Selenium.
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '10' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '11' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '12' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '13' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '14' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '15' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '16' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '17' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '18' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '19' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '20' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '21' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '22' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '23' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '24' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '25' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '26' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '27' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '28' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '29' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '30' },
          // { platform: 'Windows 8.1', browserName: 'firefox',      version: '31' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '26' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '27' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '28' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '29' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '30' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '31' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '32' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '33' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '34' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '35' },
          // { platform: 'Windows 8.1', browserName: 'googlechrome', version: '36' },

          // OS X

          // OS X 10.8 (Mountain Lion)

          // { platform: 'OS X 10.8',   browserName: 'googlechrome', version: '27' },
          // { platform: 'OS X 10.8',   browserName: 'googlechrome', version: '28' },
          // { platform: 'OS X 10.8',   browserName: 'googlechrome', version: '29' }, // Not available in SL for Selenium.
          // { platform: 'OS X 10.8',   browserName: 'googlechrome', version: '30' }, // Not available in SL for Selenium.
          // { platform: 'OS X 10.8',   browserName: 'googlechrome', version: '31' },
          // { platform: 'OS X 10.8',   browserName: 'googlechrome', version: '32' },
          // { platform: 'OS X 10.8',   browserName: 'googlechrome', version: '33' },
          // { platform: 'OS X 10.8',   browserName: 'googlechrome', version: '34' },
          // { platform: 'OS X 10.8',   browserName: 'googlechrome', version: '35' },
          // { platform: 'OS X 10.8',   browserName: 'safari',       version: '6'  },

          // OS X 10.9 (Mavericks)

          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '10' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '11' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '12' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '13' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '14' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '15' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '16' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '17' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '18' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '19' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '20' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '21' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '22' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '23' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '24' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '25' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '26' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '27' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '28' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '29' },
          // { platform: 'OS X 10.9',   browserName: 'firefox',      version: '30' },
          // { platform: 'OS X 10.9',   browserName: 'googlechrome', version: '31' },
          // { platform: 'OS X 10.9',   browserName: 'googlechrome', version: '32' },
          // { platform: 'OS X 10.9',   browserName: 'googlechrome', version: '33' },
          // { platform: 'OS X 10.9',   browserName: 'googlechrome', version: '34' },
          // { platform: 'OS X 10.9',   browserName: 'googlechrome', version: '35' },
          ],
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-saucelabs');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);

  grunt.registerTask('test', ['saucelabs-mocha']);

};
