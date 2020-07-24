package StepDefinitions;

import Base.BaseUtil;
import PageObjects.*;
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
    Deposits depositsPage = new Deposits(driver);
    int amount;


    @Given ("User is logged into account")
    public void userIsLoggedIntoAccount() {
        driver=Hooks.LoginToApplicaiton();
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
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        System.out.printf("user enters positive amount");
        depositsPage = new Deposits(driver);
        amount=100;
        depositsPage.EnterDepositAmount(amount);
    }

    @And ("user clicks on Deposit button")
    public void userClicksOnDepositButton() {
        depositsPage.ClickDeposit();
        System.out.println("user clicks on Deposit button");
    }

    @Then ("The amount should be added to account")
    public void theAmountShouldBeAddedToAccount() {
        System.out.printf("The amount should be added to account");
        Assert.assertTrue(depositsPage.depositSuccessMessage.isDisplayed());
        System.out.println();



    }

    @And ("user enters negative amount")
    public void userEntersNegativeAmount() {
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        System.out.printf("user enters negative amount");
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
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        System.out.println("user enters NaN amount");
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
