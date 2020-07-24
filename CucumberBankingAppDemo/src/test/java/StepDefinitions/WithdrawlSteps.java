package StepDefinitions;

import Base.BaseUtil;
import PageObjects.CustomerHomePage;
import PageObjects.Deposits;
import PageObjects.Withdrawls;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.concurrent.TimeUnit;

public class WithdrawlSteps extends BaseUtil {
    Withdrawls withdrawlsPage=new Withdrawls(driver);
    CustomerHomePage customerHomePage;
    int amount;


    @And ("User selects Withdrawl page")
    public void userSelectsWithdrawlPage() {
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        customerHomePage = new CustomerHomePage(driver);
        customerHomePage.ClickWithdrawl();
        System.out.println("User selects Withdrawl page");
    }


    @And ("user clicks on Withdraw button")
    public void userClicksOnWithdrawButton() {
        System.out.println("user clicks on Withdraw button");
        withdrawlsPage.ClickOnWithdraw();
    }

    @Then ("The amount should be deducted from account")
    public void theAmountShouldBeDeductedFromAccount() {
        System.out.println("The amount should be deducted from account");
        Assert.assertTrue("The message displayed was:"+ withdrawlsPage.withdrawlSuccessMessage.getText(),
                withdrawlsPage.withdrawlSuccessMessage.isDisplayed());
    }


    @And ("user enters positive amount for withdrawl within balance")
    public void userEntersPositiveAmountForWithdrawlWithinBalance() {
        System.out.println("user enters positive amount for withdrawl within balance");
        amount=10;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }

    @And ("user enters positive amount for withdrawl out of balance")
    public void userEntersPositiveAmountForWithdrawlOutOfBalance() {
        System.out.println("user enters positive amount for withdrawl out of balance");
        amount=10;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }

    @And ("user enters negative for withdrawl amount")
    public void userEntersNegativeForWithdrawlAmount() {
        System.out.println("user enters negative for withdrawl amount");
        amount=10;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }

    @And ("user enters NaN for withdrawl amount")
    public void userEntersNaNForWithdrawlAmount() {
        System.out.println("user enters NaN for withdrawl amount");
        amount=10;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }

    @And ("user enters OutOfRange for withdrawl amount")
    public void userEntersOutOfRangeForWithdrawlAmount() {
        System.out.println("user enters OutOfRange for withdrawl amount");
        amount=10;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }

    @Then ("Withdrawl Error message should be displayed")
    public void withdrawlErrorMessageShouldBeDisplayed() {
        System.out.println("Withdrawl Error message should be displayed");
        Assert.assertTrue("The following error message was displayed"+withdrawlsPage.withdrawlFailedMessage.getText(),
                withdrawlsPage.withdrawlFailedMessage.isDisplayed());
    }
}
