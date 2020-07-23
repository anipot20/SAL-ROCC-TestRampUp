package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class Withdrawls {

    WebDriver driver;
    @FindBy(how = How.XPATH, using = "//input[@placeholder='amount']")
    WebElement inputWithdrawl;

    @FindBy(how = How.XPATH, using = "//button[text()='Withdraw']")
    WebElement btnWithdraw;

    @FindBy(how = How.XPATH, using = "//*[text()='Transaction Successful']")
    public WebElement withdrawlSuccessMessage;

    @FindBy(how = How.XPATH, using = "//*[contains(text(),'Failed')]")
    public WebElement withdrawlFailedMessage;

    public Withdrawls(WebDriver drive){
        this.driver=drive;
        PageFactory.initElements(driver, this);
    }

    public void EnterWithdrawlAmount(int amount){
        inputWithdrawl.sendKeys(Integer.toString(amount));
    }

    public void ClickOnWithdraw(){
        btnWithdraw.click();
    }

}
