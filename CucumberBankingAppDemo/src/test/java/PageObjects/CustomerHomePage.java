package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class CustomerHomePage {
    WebDriver driver;

    @FindBy(how = How.XPATH, using = "//*[contains(text(),'Welcome')]")
    WebElement bannerWelcome;

    @FindBy(how = How.XPATH, using = "//button[contains(text(),'Deposit')]")
    WebElement btnDeposit;

    @FindBy(how = How.XPATH, using = "//button[contains(text(),'Withdrawl')]")
    WebElement btnWithdrawl;

    @FindBy(how= How.XPATH, using = "//button[text()='Logout']")
    WebElement btnLogout;

    public CustomerHomePage(WebDriver drive){
        this.driver=drive;
        PageFactory.initElements(driver, this);

    }

    public void ClickDeposit(){
        btnDeposit.click();
    }

    public void ClickWithdrawl(){
        btnWithdrawl.click();
    }

    public boolean checkWelcomeBanner(){
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
        return bannerWelcome.isDisplayed();

    }

    public void Logout(){
        btnLogout.click();
    }

}
