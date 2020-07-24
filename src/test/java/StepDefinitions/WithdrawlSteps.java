package StepDefinitions;

import Base.BaseUtil;
import PageObjects.CustomerHomePage;
import PageObjects.Withdrawls;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class WithdrawlSteps extends BaseUtil {
    Withdrawls withdrawlsPage;
    CustomerHomePage customerHomePage;
    int amount;


    @And ("User selects Withdrawl page")
    public void userSelectsWithdrawlPage() {
        System.out.println("User selects Withdrawl page");
        customerHomePage = new CustomerHomePage(driver);
        customerHomePage.ClickWithdrawl();

    }

//    @And ("user enters positive amount within balance")
//    public void userEntersPositiveAmountWithinBalance() {
//        System.out.println("user enters positive amount within balance");
//        withdrawlsPage=new Withdrawls(driver);
//        amount=10;
//        withdrawlsPage.EnterWithdrawlAmount(amount);
//    }

    @And ("user clicks on Withdraw button")
    public void userClicksOnWithdrawButton() {
        System.out.println("user clicks on Withdraw button");
        withdrawlsPage.ClickOnWithdraw();
    }

    @Then ("The amount should be deducted from account")
    public void theAmountShouldBeDeductedFromAccount() {
        System.out.println("The amount should be deducted from account");
        Assert.assertTrue(withdrawlsPage.withdrawlSuccessMessage.isDisplayed());
        System.out.println(withdrawlsPage.withdrawlSuccessMessage.getText());
    }

    @And ("user enters positive amount out of balance")
    public void userEntersPositiveAmountOutOfBalance() {
        System.out.println("user enters positive amount out of balance");
        amount=1000;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }

    @And ("user enters positive amount to withdraw within balance")
    public void userEntersPositiveAmountToWithdrawWithinBalance() {
        System.out.println("user enters positive amount to withdraw within balance");
        withdrawlsPage=new Withdrawls(driver);
        amount=10;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }

    @And ("user enters positive amount to withdraw out of balance")
    public void userEntersPositiveAmountToWithdrawOutOfBalance() {
        System.out.println("user enters positive amount to withdraw out of balance");
        amount=10;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }

    @And ("user enters negative to withdraw amount")
    public void userEntersNegativeToWithdrawAmount() {
        System.out.println("user enters negative to withdraw amount");
        amount=10;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }

    @And ("user enters NaN to withdraw amount")
    public void userEntersNaNToWithdrawAmount() {
        System.out.println("user enters NaN to withdraw amount");
        amount=10;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }

    @And ("user enters OutOfRange to withdraw amount")
    public void userEntersOutOfRangeToWithdrawAmount() {
        System.out.println("user enters NaN to withdraw amount");
        amount=10;
        withdrawlsPage.EnterWithdrawlAmount(amount);
    }
}
