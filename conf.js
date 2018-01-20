let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome'
    },

    suites: {

        age_gate_test: 'testy/age_gate_spec.js'
    },



    onPrepare: function () {

        browser.driver.manage().window().setSize(1280, 1024);

        global.isAngularSite = function (flag) {
            browser.ignoreSynchronization = !flag;

        };


        global.requirePAGES = function (relativePath) {
            return require(__dirname + '/pages/' + relativePath + '.js');
        };
        
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
          
    },


    params: {
        SiteToTest: {
            url: 'http://hkn-jackson.lim.bz/gate'
        },
        AgeGate: {
            url: 'http://hkn-jackson.lim.bz/gate'
        },
        EnterSite: {
            url: 'http://hkn-jackson.lim.bz/entry'
        },
        ThankYou: {
            url: ''
        },
        Terms: {
            url: ''
        },
        OurAds: {
            url: ''
        },
        Policy: {
            url: ''
        },
    },

    jasmineNodeOpts: {
        showColors: true,
    }


}
