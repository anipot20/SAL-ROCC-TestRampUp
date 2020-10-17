package Base;


import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentReporter;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class ReportingUtil {

    static ExtentTest extentTest;
    static ExtentReports report;
    static ExtentReporter reporter;

    @Before
    public static void setExtent(String suite)
    {

        String path=System.getProperty("user.dir")+"\\ExtentReports\\"+suite+".html";

////       ExtentReporter(path) reporter;
//        reporter.
//        reporter.config().setReportName(suite+" Report");
//        reporter.config().setDocumentTitle(suite+" Report");
//        reporter.config().setTheme(Theme.DARK);
//        report=new ExtentReports();
//        report.attachReporter(reporter);
//        report.setSystemInfo("QA", "Anil");

    }

    @After
    public void endReport(){
        report.flush();
    }




}


