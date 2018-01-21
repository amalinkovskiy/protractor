describe("Adopt an animal on the zoo test site", function(){
    
    beforeEach(function(){
        browser.get("http://www.thetestroom.com/jswebapp/");
    });
    
    it("get to the system", function(){
        
        expect(browser.getCurrentUrl()).toContain("jswebapp");
    });

    it("should generate correct text", function(){
        var textMessage = "I will subscribe to this channel";
        element(by.model("person.name")).sendKeys(textMessage);
        element(by.binding("person.name")).getText().then(function(text){
            expect(textMessage).toEqual(text);
        });
    });

    it("should be able to adopt an animal", function(){
        element(by.buttonText("CONTINUE")).click();
        element(by.model("animal")).$("[value='1']").click();
        element.all(by.css(".ng-pristine option")).then(function(items){
            expect(items.length).toBe(4);
            expect(items[1].getText()).toBe("George the Turtle");
        });
        element(by.buttonText("CONTINUE")).click();
    });

    it("should check user is on the thank you page", function(){
        element(by.buttonText("CONTINUE")).click();        
        element(by.buttonText("CONTINUE")).click();
        expect(browser.getCurrentUrl()).toContain("confirm");
    });

});