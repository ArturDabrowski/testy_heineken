require ('./thankYou.js');


var register = function () {

    var email = element(by.id('email'));
    var checkboxTC = element(by.id('tc_accepted'));
    var enterBtn = element(by.tagName('button'));
    var modalOk = element(by.className('confirm'));
    

    var randState = function (){
        var allOptions = element(by.name('state')).all(by.tagName('option'));

        allOptions.count().then(function(numberOfItems) {
            return Math.floor(Math.random() * numberOfItems);
        }).then(function(randomNumber) {
            allOptions.get(randomNumber).click();
        });
    };

    var getRandomEmail = function(characterLength, type) {
            var randomText = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < characterLength; i++) {
                randomText += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            if(type) {
                return randomText+"@wp.pl";
            } else {
                return randomText+"@wp.com";
            }
    };


    this.enterWithWrongEmail = function(){
        

        var emailTable = ['aaaaa', 'aaa@', 'aaad@wp', 'asa@wp.'];
        checkboxTC.click();

        for(var i = 0; i !=4; i++){
            email.clear();
            email.sendKeys(emailTable[i]);
            randState();
            enterBtn.click();
            browser.driver.sleep(500);
            modalOk.click();
        }
    };

    this.allTheStates = function(){
            var statesTable = ['AL', 'AK',  'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI',  'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
             'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 
             'UT', 'VT', 'VA', 'WV', 'WI', 'WY'];

             // 'WA', 'OR','NV', 'AZ','ID',

        for (var i=0; i !=45; i++){
            element(by.name('state')).$('[value="'+statesTable[i]+'"]').click();
            getRandomEmail();
            enterBtn.click();
            modalOk.click();
        }
    };

    this.enterCorrectData = function(){
        firstName.clear();
        lastName.clear();
        phone.clear();
        email.clear();
        email.sendKeys(getRandomEmail(7, true));
        email.sendKeys(getRandomEmail(7, false));
        firstName.sendKeys(getRandomString(7));
        lastName.sendKeys(getRandomString(7));
        phone.sendKeys(getRandomNumber(10));
        checkboxTC.click();
        randState();
        enterBtn.click();
        browser.driver.sleep(500);
        return require ('./thankYou.js');
    };

};
module.exports = new register();
