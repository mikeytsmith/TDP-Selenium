const {Builder, By, Key} = require("selenium-webdriver");
// Builder - what builds our webpage
// By - how we select the element to click or input values into
// Key - keyboard/mouse functionality
const assert = require("assert"); // for our actual test - assertions

// using mocha to run describe test and adda function without a timeout
describe("check to click the tshirt button and click on  t-shirt", function() {
    this.timeout(300000);

    let driver; //declaring a driver variable

    //setting up our browser to be ready for testing - before each test. creates driver window for each test
    beforeEach(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        driver.manage().setTimeouts({implicit:5000});
    });

    //terminating the browser after each test
    afterEach(async () => {
        await driver.quit();
    });

    // tests is the individual test with description and async function declaration
    it("Go to automationpractice and click TShirt ", async () => {
        // arrange
        //tells driver to go to automation website
        driver.get("http://automationpractice.com/index.php"); // navigate to the URL declared

        let tshirt;
        let tshirtText;

        // Act
    // Finding the tshirt link and clicking it
    tshirt = await driver.findElement(By.xpath
        ("/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[3]/a"))
        .click();
  
  //comparing xpath text with expected text
      tshirtText = await
        (await driver.findElement
          (By.xpath("/html/body/div/div[2]/div/div[3]/div[2]/h1/span[1]"))).getText()
          .then(function (value) {
            return value
          });
  // assert.equal(tshirtText, "T-SHIRTS") 
       
        // click the first t shirt that loads
         //click on 1st t-shirt on screen
    clickTshirt = await driver.findElement
    (By.xpath("/html/body/div/div[2]/div/div[3]/div[2]/ul/li/div/div[1]/div/a[1]/img"))
    .click();

    //compare xpath text with what's expected -  get the products name (H1 tag)
  let chosenShirt = await
    (await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div/div[3]/h1"))).getText()
      .then(function (value) {
        return value
      });

//   assert.equal(chosenShirt, "Faded Short Sleeve T-shirts");
      
        //stores this h1 tag as text
        // tshirtToText = await chosenShirt.getText();

        // clicks add to cart
        addToCart = await
            (await driver.findElement(By.name("Submit"))).click();
            // xpath("/html/body/div/div[2]/div/div[3]/div/div/div/div[4]/form/div/div[3]/div/p/button
        //on popup window click proceed to checkout
        popUp = await
        (await driver.findElement
          (By.className("btn btn-default button button-medium")))
            .click();
        // xpath ("/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[2]/div[4]/a/span

        //compare xpath text vs what's expected
    addedToCart = await
    (await driver.findElement
      (By.xpath
        ("/html/body/div/div[2]/div/div[3]/div/div[2]/table/tbody/tr/td[2]/p/a")))
        .getText()
        .then (function (value) {
          return value
        });
       

    assert.equal(addedToCart, chosenShirt);
  });
});
      