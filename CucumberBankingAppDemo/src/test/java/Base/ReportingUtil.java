package Base;


import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class ReportingUtil {

    static ExtentTest test;
    static ExtentReports report;
    public static void config(String suite)
    {

        String path=System.getProperty("user.dir")+"\\ExtentReports\\"+suite+".html";
        ExtentSparkReporter reporter=new ExtentSparkReporter(path);
        reporter.config().setReportName("WebApp Reports");
        report=new ExtentReports();
        report.attachReporter(reporter);
        report.setSystemInfo("QA", "Anil");

    }

}


