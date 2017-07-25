exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['CTVDemo.js'],
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine2',
    onPrepare: function () {
        browser.driver.manage().window().setSize(1680, 900);
        var jasmineReporters = require('jasmine-reporters');
        var junitReporter = new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'output',
            filePrefix: 'xmloutput', 
            displayStacktrace: 'none'
        });
        //commenting silly change against jenkins build process for end to end pipeline 
        jasmine.getEnv().addReporter(junitReporter);
    },
    jasmineNodeOpts: {
        includeStackTrace: false,
        defaultTimeoutInterval: 250000
    },


}