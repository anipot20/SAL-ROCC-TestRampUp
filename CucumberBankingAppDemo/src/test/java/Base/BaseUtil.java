package Base;

import com.sun.xml.internal.messaging.saaj.packaging.mime.util.LineInputStream;
import org.omg.CORBA.portable.InputStream;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.GeckoDriverInfo;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class BaseUtil {
    public static WebDriver driver;

    public static WebDriver GetChromeDriver() throws IOException {
        System.out.println("Called Open Chrome Browser");

        String projectPath = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver",projectPath+"/src/test/resources/drivers/chromedriver.exe");


        driver = new ChromeDriver();

        return driver;
    }

    public static WebDriver OpenApplicaitonInBrowser() throws IOException {
        Properties prop = new Properties();
        FileInputStream fis= new FileInputStream("src/test/java/Base/Global.properties");
        prop.load(fis);
        driver.manage().deleteAllCookies();

        driver.get( prop.getProperty("qa-url"));
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
        return driver;

    }

    public static WebDriver GetFireFoxDriver(){
        System.out.println("Called Open Firefox Browser");
        String projectPath = System.getProperty("user.dir");
        System.setProperty("webdriver.gecko.driver",projectPath+"/src/test/resources/drivers/chromedriver.exe");
        driver = new FirefoxDriver();
        return driver;
    }


}
