describe('Test show that age gate is configure properly', function () {

    var age_gate = requirePAGES('age_gate_page');
    var register = requirePAGES('register')
    var params = browser.params;


    beforeEach(function () {
        isAngularSite(false);
        browser.get(params.SiteToTest.url);
        

    });


    xit('Should enter false values and dont pass the gate 31 days in  months that have 30 days', function () {
        
        age_gate.failAgeGate31Days();

        expect(browser.getCurrentUrl()).toBe(params.AgeGate.url);
    });


    xit('Should enter false values and dont pass the gate 29 days in year % 4 = 0', function () {
        
        age_gate.failAgeGateAprilDays();

        expect(browser.getCurrentUrl()).toBe(params.AgeGate.url);

    });
    
    xit('Should enter date less than 21 yo and fail', function(){ 

        age_gate.failAgeGateLessThen21Years();

        expect(browser.getCurrentUrl()).toBe(params.AgeGate.url);
    });

    xit('Should enter none values and dont pass the gate ', function () {
        
        age_gate.nonValues();

        expect(browser.getCurrentUrl()).toBe(params.AgeGate.url);
    });

    xit('Should enter without day and fail', function () {

        age_gate.enterWithoutDay();

        expect(browser.getCurrentUrl()).toBe(params.AgeGate.url);
        
    });

    xit('Should enter without month and fail', function () {

        age_gate.enterWithoutMonth();

        expect(browser.getCurrentUrl()).toBe(params.AgeGate.url);
        
    });

    xit('Should enter without year and fail', function () {

        age_gate.enterWithoutYear();

        expect(browser.getCurrentUrl()).toBe(params.AgeGate.url);
        
    });

    it('Should enter true values and pass the gate today is the day of birthday', function () {

        age_gate.passAgeGateToday21();

        browser.driver.sleep(1000);

        expect(browser.getCurrentUrl()).toBe(params.EnterSite.url);

    });
});

describe('Trest show that register is configure properly', function(){

        var age_gate = requirePAGES('age_gate_page');
        var register = requirePAGES('register')
        var params = browser.params;


        beforeEach(function () {
            isAngularSite(false);
            browser.get(params.EnterSite.url);
        
    });

    xit('should enter without state and fail', function () {

        register.enterWithoutState();
        browser.driver.sleep(500);

        expect(browser.getCurrentUrl()).toBe(params.EnterSite.url);

    });
    xit('should enter all values but without name and fail', function () {

        register.enterWithoutName();
        browser.driver.sleep(500);

        expect(browser.getCurrentUrl()).toBe(params.EnterSite.url);

    });
    it('should enter all values but without last name and fail', function () {


        register.enterWithoutLastName();
        browser.driver.sleep(500);

        expect(browser.getCurrentUrl()).toBe(params.EnterSite.url);

    });
    xit('should enter all values but without phone and fail', function () {

        register.enterWithoutPhone();
        browser.driver.sleep(500);

        expect(browser.getCurrentUrl()).toBe(params.EnterSite.url);

    });
    xit('should enter all values but without email and fail', function () {

        register.enterWithoutEmail();
        browser.driver.sleep(500);

        expect(browser.getCurrentUrl()).toBe(params.EnterSite.url);

    });
    
    xit('should enter wrong email and fail', function () {

        register.enterWithWrongEmail();
        browser.driver.sleep(500);
        
        expect(browser.getCurrentUrl()).toBe(params.EnterSite.url);

    });
    xit('should enter wrong phone and fail', function () {

        register.enterWithWrongPhone();
        browser.driver.sleep(500);

        expect(browser.getCurrentUrl()).toBe(params.EnterSite.url);

    });
    xit('should enter all values but without checkbox and fail', function () {

        register.enterWithoutCheckbox();
        browser.driver.sleep(500);

        expect(browser.getCurrentUrl()).toBe(params.EnterSite.url);

    });


    xit('should enter correct values and pass', function () {

        register.enterCorrectData();
        browser.driver.sleep(2500);

        expect(browser.getCurrentUrl()).toBe(params.ThankYou.url);

    });
    it('should check all 50 states', function () {

        register.allTheStates();
        browser.driver.sleep(500);

        expect(browser.getCurrentUrl()).toBe(params.EnterSite.url);

    });

});




    


