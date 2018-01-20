require ('./register.js');

var age_gate_page = function () {

    var month = element(by.name('dob[month]'));
    var day = element(by.name('dob[day]'));
    var year = element(by.name('dob[year]'));
    var enterBtn = element(by.tagName('button'));
    var cancelBtn = element(by.css('.cancel'));
    var facebookBtn = element(by.id('facebook-login-button'));
    

    var yearGlobal = '1994';
    var d = new Date();
    var monthDate = d.getMonth()+1 ;
    var dayDate = d.getDate(); 
    var currentYearGlobal = d.getYear() + 1879;

    var randMonth = function (){
        var allOptions = element(by.name('month')).all(by.tagName('option'));

        allOptions.count().then(function(numberOfItems) {
            return Math.floor(Math.random() * numberOfItems);
        }).then(function(randomNumber) {
            allOptions.get(randomNumber).click();
        });
    };
    var randDay = function (){
        var allOptions = element(by.name('day')).all(by.tagName('option'));

        allOptions.count().then(function(numberOfItems) {
            return Math.floor(Math.random() * numberOfItems);
        }).then(function(randomNumber) {
            allOptions.get(randomNumber).click();
        });
    };
    var randYear = function (){
        var allOptions = element(by.name('year')).all(by.tagName('option'));

        allOptions.count().then(function(numberOfItems) {
            return Math.floor(Math.random() * numberOfItems);
        }).then(function(randomNumber) {
            allOptions.get(randomNumber).click();
        });
    };


    this.failAgeGate31Days = function () {

        console.log('\nChecking if we can pass in month that have only 30 days:');

        var monthTable = [2, 4, 6, 9, 11];

        for (var i = 0; i != 5; i++) {

            day.$('[value="31"]').click();
            year.$('[value="1989"]').click();
            if (monthTable[i]<10){
              month.$('[value="0'+monthTable[i]+'"]').click();  
            } else {
                month.$('[value="'+monthTable[i]+'"]').click();
            };
            enterBtn.click();
            browser.driver.sleep(500);
            cancelBtn.click();

        }
    };

    this.failAgeGateAprilDays = function () {

        console.log('\nChecking if we can pass 29 days in Feb if the years is no leap year:');

            day.$('[value="29"]').click();
            year.$('[value="1994"]').click();
            month.$('[value="04"]').click();
    
            enterBtn.click();
            browser.driver.sleep(500);
            cancelBtn.click();

    };

    this.failAgeGateLessThen21Years = function () {

        console.log('\nChecking if we can pass when we dont have 21 years:');

        var tomorrow = d.getDate()+1 ; 

        if(tomorrow<10){
            day.$('[value="0'+tomorrow+'"]').click();
        } else {
            day.$('[value="'+tomorrow+'"]').click();
        };

        if (monthDate<10){
            month.$('[value="0'+monthDate+'"]').click();  
        } else {
            month.$('[value="'+monthDate+'"]').click();
        };

        year.$('[value="'+currentYearGlobal+'"]').click();
    
        enterBtn.click();
        browser.driver.sleep(500);
        cancelBtn.click();

    };


    this.nonValues = function () {

        console.log('\nShould click submit with no values:');

        day.$('[value=""]').click();
        year.$('[value=""]').click();
        month.$('[value=""]').click();

        enterBtn.click();
        browser.driver.sleep(500);
        cancelBtn.click();

    };
    this.enterWithoutDay = function(){
        console.log('\nShould click submit without choosing day and fail');

        day.$('[value=""]').click();
        year.$('[value=""]').click();
        month.$('[value=""]').click();

        randMonth();
        randYear();
        enterBtn.click();
        browser.driver.sleep(500);
        cancelBtn.click();

    };
    this.enterWithoutMonth = function(){
        console.log('\nShould click submit without choosing month and fail');

        day.$('[value=""]').click();
        year.$('[value=""]').click();
        month.$('[value=""]').click();

        randDay();
        randYear();
        enterBtn.click();
        browser.driver.sleep(500);
        cancelBtn.click();

    };
    this.enterWithoutYear = function(){
        console.log('\nShould click submit without choosing year and fail');

        day.$('[value=""]').click();
        year.$('[value=""]').click();
        month.$('[value=""]').click();

        randDay();
        randMonth();
        enterBtn.click();
        browser.driver.sleep(500);
        cancelBtn.click();

    };

    this.passAgeGateToday21 = function () {

        console.log('\nChecking if we have 21 years today and pass:');

        if(dayDate<10){
            day.$('[value="0'+dayDate+'"]').click();
        } else {
            day.$('[value="'+dayDate+'"]').click();
        };

        if (monthDate<10){
            month.$('[value="0'+monthDate+'"]').click();  
        } else {
            month.$('[value="'+monthDate+'"]').click();
        };
        
        year.$('[value="1989"]').click();

        enterBtn.click();
        browser.driver.sleep(1000);
        return require ('./register.js');
        

    };

};
module.exports = new age_gate_page();
