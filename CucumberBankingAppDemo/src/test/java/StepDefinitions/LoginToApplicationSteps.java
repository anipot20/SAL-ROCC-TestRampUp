package StepDefinitions;

import PageObjects.ApplicationHome;
import PageObjects.CustomerHomePage;
import PageObjects.LoginPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class LoginToApplicationSteps {

    public WebDriver driver;



    ApplicationHome applicationHome;
    LoginPage loginPage;
    CustomerHomePage customerHomePage;

    public LoginToApplicationSteps(){
        driver=Hooks.driver;


    }

    @Given("User is on the Login Page")
    public void userIsOnTheLoginPage() throws Throwable{

       System.out.println("Application homepage was displayed.");
    }

    @And("User clicks on Customer Login button")
    public void userClicksOnCustomerLoginButton() throws InterruptedException {
        //Thread.sleep(5000);


        System.out.println("Login page is displayed.");

    }

    @And("User selects the user name")
    public void userSelectsTheUserName()   {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        loginPage = new LoginPage(driver);
        loginPage.SelectUser();

        System.out.println("User is selected.");
    }

    @And("User clicks on Login button")
    public void userClicksOnLoginButton() throws InterruptedException {
        Thread.sleep(2000);
        loginPage.LoginToAccount();
        System.out.println("User clicked on Login button.");
    }

    @Then("User should be logged in to application.")
    public void userShouldBeLoggedInToApplication() throws InterruptedException {
        Thread.sleep(2000);
        customerHomePage = new CustomerHomePage(driver);
        boolean status=customerHomePage.checkWelcomeBanner();
        Assert.assertTrue(status);
        System.out.println("Login was successful");


    }
}
