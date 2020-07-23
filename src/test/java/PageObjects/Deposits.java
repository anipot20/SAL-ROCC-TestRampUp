package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class Deposits {

    WebDriver driver;

    @FindBy(how = How.XPATH, using = "//input[@placeholder='amount']")
    public WebElement inputDeposit;

    @FindBy(how = How.XPATH, using = "//button[text()='Deposit']")
    WebElement btnDeposit;

    @FindBy(how = How.XPATH, using = "//body[@class='ng-scope']//div[@class='ng-scope']//div[@class='ng-scope']//div[2]")
    WebElement currentBalance;

    @FindBy(how = How.XPATH, using = "//*[text()='Deposit Successful']")
    public WebElement depositSuccessMessage;

    @FindBy(how = How.XPATH, using = "//*[contains(text(),'Failed')]")
    public WebElement depositFailedMessage;

    public Deposits(WebDriver drive){
        this.driver=drive;
        PageFactory.initElements(driver,this);
    }

    public void EnterDepositAmount(int amount){
        inputDeposit.sendKeys(Integer.toString(amount));
    }

    public void ClickDeposit(){
        btnDeposit.click();
    }


//    public int GetCurrentBalance(){
//        int curBal= Integer.parseInt(currentBalance.getText());
//        return curBal;
//    }
}
