package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    WebDriver driver;

    @FindBy(how= How.ID, using = "userSelect")
    WebElement dropdownUserSelection;

    @FindBy(how = How.XPATH, using = "//*[text()='Harry Potter']")
    WebElement userName;

    @FindBy(how = How.XPATH, using = "//*[text()='Login']")
    WebElement btnLogin;

    @FindBy(how = How.XPATH, using= "//button[text()='Deposit']")
    WebElement bannerLoginPage;

    public  LoginPage(WebDriver driver){
        this.driver=driver;
        PageFactory.initElements(driver, this);

    }

    public void SelectUser(){
        dropdownUserSelection.click();
        userName.click();
    }

    public void LoginToAccount(){
        btnLogin.click();
    }

    public boolean IsLoginPageDisplayed(){
        return bannerLoginPage.isDisplayed();
    }
}
