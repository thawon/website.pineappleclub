describe("authentication", function () {
    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
    });

    it("user entered incorrect credential", function () {
        ptor.driver.get("http://127.0.0.1:3000/login");
        ptor.sleep(2000);

        element(by.id("email")).sendKeys("invalid@com");
        element(by.id("password")).sendKeys("b");
        element(by.id("lg_login_button")).click();

        ptor.sleep(5000);
    });

    it("user logins successfully", function () {
        ptor.driver.get("http://127.0.0.1:3000/login");
        ptor.sleep(2000);

        element(by.id("email")).sendKeys("a@com");
        element(by.id("password")).sendKeys("b");
        element(by.id("lg_login_button")).click();
        
        ptor.sleep(5000);
    });

});