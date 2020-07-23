package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class ApplicationHome {

    WebDriver driver;


    @FindBy(how= How.XPATH, using = "//*[text()='Customer Login']")
    WebElement btnCustomerLogin;

    @FindBy(how=How.XPATH, using = "//*[text()='Bank Manager Login']")
    WebElement btnBankManagerLogin;

    public ApplicationHome(WebDriver driver){
        this.driver=driver;
        PageFactory.initElements(driver, this);
    }

//    public void OpenApplicaiton(){
//        driver.navigate().to("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
//        driver.manage().window().maximize();
//    }

    public void ClickOnCustomerLogin(){
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
        btnCustomerLogin.click();
    }

    public void ClickOnBankManagerLogin(){
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
        btnBankManagerLogin.click();
    }
}
