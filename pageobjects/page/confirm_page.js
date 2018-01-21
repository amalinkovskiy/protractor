var confirm_page = function(){
    this.getTitle = function(){
        return element(by.css('h1')).getText();
    };
};

module.exports = new confirm_page();