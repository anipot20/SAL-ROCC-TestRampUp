package StepDefinitions;

import Base.BaseUtil;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class WithdrawlSteps extends BaseUtil {

    public WithdrawlSteps(){
       driver=Hooks.driver;
    }
    @And ("User selects Withdrawl page")
    public void userSelectsWithdrawlPage() {
    }

    @And ("user enters positive amount within balance")
    public void userEntersPositiveAmountWithinBalance() {
    }

    @And ("user clicks on Withdraw button")
    public void userClicksOnWithdrawButton() {
    }

    @Then ("The amount should be deducted from account")
    public void theAmountShouldBeDeductedFromAccount() {
    }

    @And ("user enters positive amount out of balance")
    public void userEntersPositiveAmountOutOfBalance() {
    }
}
