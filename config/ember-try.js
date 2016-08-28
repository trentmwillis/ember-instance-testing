/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'lts',
      bower: {
        dependencies: { }
      }
    },
    {
      name: 'release',
      bower: {
        dependencies: {
          'ember': 'release'
        },
        resolutions: {
          'ember': 'release'
        }
      }
    },
    {
      name: 'beta',
      bower: {
        dependencies: {
          'ember': 'beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'canary',
      bower: {
        dependencies: {
          'ember': 'canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    }
  ]
};
