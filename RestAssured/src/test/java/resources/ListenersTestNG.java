package resources;

import org.testng.ITestListener;
import org.testng.ITestResult;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.markuputils.ExtentColor;
import com.aventstack.extentreports.markuputils.Markup;
import com.aventstack.extentreports.markuputils.MarkupHelper;
import com.mongodb.diagnostics.logging.Logger;

import apilogic.Library;

import java.util.Arrays;

import org.testng.ITestContext;

public class ListenersTestNG implements ITestListener {
	ExtentTest test;
    ExtentReports extent=ExtentReportNG.getReportObject();
    ThreadLocal<ExtentTest> extentTest=new ThreadLocal<ExtentTest>();

	@Override
	public void onTestStart(ITestResult result) {

		test = extent.createTest(result.getMethod().getMethodName());
		extentTest.set(test);

	}

	@Override
	public void onTestSuccess(ITestResult result) {

		String logText="<b>Test Method   " + result.getMethod().getMethodName() + "   Successfull</b>";

		Markup m=MarkupHelper.createLabel(logText,ExtentColor.GREEN);

		extentTest.get().log(Status.PASS, m);
	}


	@Override
	public void onTestFailure(ITestResult result) {

		String logText="<b>Test Method  " + result.getMethod().getMethodName() + "  Failed</b>";
		Markup m=MarkupHelper.createLabel(logText,ExtentColor.RED);
		extentTest.get().fail(m);
	}

	@Override
	public void onTestSkipped(ITestResult result) {
		String logText="<b>Test Method   " + result.getMethod().getMethodName() + "   Skipped</b>";
		Markup m=MarkupHelper.createLabel(logText,ExtentColor.YELLOW);
		extentTest.get().skip(m);


	}

	@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {

	}

	@Override
	public void onStart(ITestContext context) {

	}

	@Override
	public void onFinish(ITestContext context) {
		extent.flush();

	}


}







