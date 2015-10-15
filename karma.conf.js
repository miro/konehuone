/* jshint strict: false */

var cfg = require('./config.json');

module.exports = function (config) {
    config.set({
        files: [
            // bower:js
            { pattern: 'bower_components/angular/angular.js', watched: false },
            { pattern: 'bower_components/angular-bootstrap/ui-bootstrap-tpls.js', watched: false },
            { pattern: 'bower_components/angular-mocks/angular-mocks.js', watched: false },
            { pattern: 'bower_components/angular-ui-router/release/angular-ui-router.js', watched: false },
            { pattern: 'bower_components/angular-translate/angular-translate.js', watched: false },
            { pattern: 'bower_components/ng-lodash/build/ng-lodash.js', watched: false },
            { pattern: 'bower_components/waypoints/lib/noframework.waypoints.min.js', watched: false },
            { pattern: 'bower_components/SHA-1/sha1.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-clicky.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-cnzz.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-ga-cordova.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-gtm.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-piwik.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-scroll.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-splunk.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-woopra.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-marketo.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-intercom.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-inspectlet.js', watched: false },
            { pattern: 'bower_components/angulartics/src/angulartics-newrelic-insights.js', watched: false },
            { pattern: 'bower_components/angulartics-google-analytics/dist/angulartics-google-analytics.min.js', watched: false },
            // endbower
            'node_modules/ng-describe/dist/ng-describe.js',
            cfg.build + '/+(app|common)/**/*.module.js',
            cfg.build + '/+(app|common)/**/*.js',
            cfg.paths.tests
        ],
        frameworks: ['jasmine'],
        plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-coverage'],

        preprocessors: {
            'src/**/*.js': 'coverage'
        },

        coverageReporter: {
            type: 'text'
        },

        browsers: [
            'PhantomJS'
        ]
    });
};
