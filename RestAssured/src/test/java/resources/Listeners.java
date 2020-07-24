package resources;

import org.testng.ITestListener;
import org.testng.ITestResult;
import org.testng.ITestContext;

public class Listeners implements ITestListener {
	
	@Override
	public void onTestStart(ITestResult result) {
		
	}
	
	@Override
	public void onTestSuccess(ITestResult result) {
		System.out.println("Execution successfull: " +result.getName());
		
		
	}

	
	@Override
	public void onTestFailure(ITestResult result) {
		System.out.println("Execution failed: " +result.getName());
	}

	
	
	@Override
	public void onTestSkipped(ITestResult result) {
		
	}

	@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {
		
	}

	@Override
	public void onStart(ITestContext context) {
		
	}


}
