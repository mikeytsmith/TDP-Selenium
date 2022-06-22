const {Builder, By, Key} = require("selenium-webdriver");
// Builder - what builds our webpage
// By - how we select the element to click or input values into
// Key - keyboard/mouse functionality
const assert = require("assert"); // for our actual test - assertions

describe("check to click the tshirt button and click on  t-shirt", function() {
    this.timeout(30000);

    let driver; //declaring a driver variable

    //setting up our browser to be ready for testing - before each test
    beforeEach(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        driver.manage().setTimeouts({implicit:5000});
    });

    //terminating the browser after each test
    afterEach(async () => {
        await driver.quit();
    });

    // tests
    it("Go to automationpractice and click TShirt ", async () => {
        driver.get("http://automationpractice.com/index.php"); // navigate to the URL declared

        let tshirt;
        let tshirtToText;

        //click t shirt button
        driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[3]/a")).click(); //accept the agreeement
        await driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[3]/a")).click(); //find the button and click it
       
        // click the first t shirt that loads
        await driver.findElement(By.className("button lnk_view btn btn-default")).click();
       
        // get the products name (H1 tag)
        tshirt = await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div/div[3]/h1"));

        //stores this h1 tag as text
        tshirtToText = await product.getText();

        // clicks add to cart
        await driver.findElement(By.name="Submit").click();

        //on popup window click proceed to checkout
        await driver.findElement(By.className("btn btn-default button button-medium")).click();

        let basketItem;
        let basketItemText;
        
        //stores product name in checkout to variable
        basketItem = await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/table/tbody/tr/td[2]/p/a"));
        basketItemText = await basketItem.getText();
        
        assert.equal(tshirtToText, basketItemText); // to check if the value we got is equal to what we expected!
    });
});
