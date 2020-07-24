package StepDefinitions;

import Base.BaseUtil;
import PageObjects.ApplicationHome;
import PageObjects.CustomerHomePage;
import PageObjects.LoginPage;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import javax.swing.undo.CannotUndoException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

public class Hooks extends BaseUtil{
    public static ApplicationHome applicationHome;
    public static CustomerHomePage customerHomePage;
    public static LoginPage loginPage;

    @Before("@Sanity")
    public void BeforeTest() throws IOException, InterruptedException {
        System.out.println("Inside Before Test");
        BaseUtil.GetChromeDriver();
        driver =Hooks.OpenApplicaitonInBrowser();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        applicationHome = new ApplicationHome(driver);
        applicationHome.ClickOnCustomerLogin();

    }

    @Before("@Regression")
    public void BeforeRegTest() throws IOException, InterruptedException {
        System.out.println("Inside Before Test");
        BaseUtil.GetChromeDriver();
        driver =Hooks.OpenApplicaitonInBrowser();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        applicationHome = new ApplicationHome(driver);
        applicationHome.ClickOnCustomerLogin();

    }


    public static WebDriver LoginToApplicaiton(){
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        loginPage = new LoginPage(driver);
        loginPage.SelectUser();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        loginPage.LoginToAccount();
        System.out.println("User clicked on Login button.");
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        customerHomePage = new CustomerHomePage(driver);
        boolean status=customerHomePage.checkWelcomeBanner();
        if(status)
            System.out.println("User is successfully logged in.");
        else
            System.out.println("Login to application failed.");

        return driver;
    }

    @After("@Sanity")
    public void AfterTest(){
        System.out.println("Inside After Test");
        driver.quit();

    }
    @After("@Regression")
    public void AfterRegTest(){
        System.out.println("Inside After Test");
        driver.quit();

    }



}
