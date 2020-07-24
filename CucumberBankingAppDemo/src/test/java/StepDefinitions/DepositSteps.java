package StepDefinitions;

import Base.BaseUtil;
import PageObjects.ApplicationHome;
import PageObjects.CustomerHomePage;
import PageObjects.Deposits;
import PageObjects.LoginPage;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.hu.De;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class DepositSteps extends BaseUtil {


    CustomerHomePage customerHomePage;
    Deposits depositsPage;
    int amount;


//    public DepositSteps(){
//        driver=Hooks.driver;
//    }



    @Given ("User is logged into account")
    public void userIsLoggedIntoAccount() {
        Hooks.LoginToApplicaiton();
        System.out.println("User is logged into account ");

    }

    @And ("User selects Deposits page")
    public void userSelectsDepositsPage() {
        System.out.println("User selects Deposits page ");
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        customerHomePage = new CustomerHomePage(driver);
        customerHomePage.ClickDeposit();

    }


    @And ("user enters positive amount")
    public void userEntersPositiveAmount() {
        System.out.println("user enters positive amount");
        depositsPage=new Deposits(driver);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
//        oldBalance = depositsPage.GetCurrentBalance();
        depositsPage = new Deposits(driver);
        amount=100;
        depositsPage.EnterDepositAmount(amount);
    }

    @And ("user clicks on Deposit button")
    public void userClicksOnDepositButton() throws InterruptedException {
        depositsPage.ClickDeposit();
        System.out.println("user clicks on Deposit button");
        driver.manage().timeouts().implicitlyWait (30, TimeUnit.SECONDS);
        Thread.sleep(3000);
    }

    @Then ("The amount should be added to account")
    public void theAmountShouldBeAddedToAccount() {

        Assert.assertTrue(depositsPage.depositSuccessMessage.isDisplayed());
        System.out.println(depositsPage.depositSuccessMessage.getText());



    }

    @And ("user enters negative amount")
    public void userEntersNegativeAmount() {
        depositsPage=new Deposits(driver);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

        depositsPage = new Deposits(driver);
        amount=-100;
        depositsPage.EnterDepositAmount(amount);

    }

    @Then ("Error message should be displayed")
    public void errorMessageShouldBeDisplayed() {
        Assert.assertTrue(depositsPage.depositFailedMessage.isDisplayed());
    }

    @And ("user enters NaN amount")
    public void userEntersNaNAmount() {
        depositsPage=new Deposits(driver);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

        depositsPage = new Deposits(driver);
        depositsPage.inputDeposit.sendKeys("abc");
        depositsPage.ClickDeposit();
    }

    @And ("user enters OutOfRange amount")
    public void userEntersOutOfRangeAmount() {
        System.out.println("user enters OutOfRange amount");
        amount=-100;
        depositsPage.EnterDepositAmount(amount);

    }
}
