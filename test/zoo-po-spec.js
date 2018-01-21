 var util = require ('util');

describe ("to show page object example", function(){

    beforeEach(function(){
        browser.get("http://www.thetestroom.com/jswebapp/");
    });

    xit("should be able to adopt an animal", function(){
        element(by.model('person.name')).sendKeys("I will subscribe");
        var dynamicText = element(by.binding("person.name")).getText();
        expect(dynamicText).toBe("I will subscribe");
        element(by.buttonText("CONTINUE")).click();
        element(by.model('animal')).$('[value="2"]').click();
        element(by.buttonText("CONTINUE")).click();
        var thankYouText = element(by.css('h1')).getText();
        expect(thankYouText).toBe("Thank you");
    });

    var home_page = require("../page/home_page.js");

    it("should be able to adopt an animal using page obj", function(){
        home_page.enterFieldValue("You will subscribe");
        var getHomePageText = home_page.getDyanmicText();
        expect(getHomePageText).toBe("You will subscribe");
        var animal_page = home_page.clickContinue();
        animal_page.selectAnimal(2);
        animal_page.clickContinue();      
                
    });

});