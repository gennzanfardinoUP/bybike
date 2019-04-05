

describe("Load the register Page ", function(){
   browser.ignoreSynchronization=true; // This allows to protractor to run on regular website, not specific to angular

  it("Load the  register Page ", function(){
    browser.get("http://localhost:4200/auth/signup"); // Go to a specific URL
    console.log("Home Page Open succesffully")
    browser.sleep(10000) // browser to sleep for 25 seconds
  });


  it('register user', function () {


    });
  });
