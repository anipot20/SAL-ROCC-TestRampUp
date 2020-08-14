package apilogic;
import org.junit.Assert;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import Payload.Data;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import static io.restassured.RestAssured.*;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;

public class ROCClogin {
	static ExtentTest test;
	static ExtentReports report;
	static RequestSpecification req;
	static ResponseSpecification resspec;



	public static void basic() throws FileNotFoundException

	{

		String uri="https://salhealth009-rocc.cloud.pcftest.com/";
		PrintStream log=new PrintStream(new FileOutputStream("ROCClogs.txt"));
		req=new RequestSpecBuilder().setBaseUri(uri).addFilter(RequestLoggingFilter.logRequestTo(log)).addFilter(ResponseLoggingFilter.logResponseTo(log)).setContentType(ContentType.JSON).build();
		resspec=new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();

	}



	public static void config()
	{

		String path=System.getProperty("user.dir")+"\\reports\\index1.html";
		ExtentHtmlReporter reporter=new ExtentHtmlReporter(path);
		reporter.config().setReportName("WebApp Reports");
		report=new ExtentReports();
		report.attachReporter(reporter);
		report.setSystemInfo("QA", "Anusha");

	}


	public static void Login()
	{

		report.createTest("ROCC_Login");
		RequestSpecification res=given().spec(req).body(Data.Login());
		Response response=res.when().post("serverlogin").then().spec(resspec).extract().response();
		String resp=response.asString();
		JsonPath js=Utils.rawtoJson(resp);
		String access_token=js.getString("loginResponse.accessToken");
		System.out.println(access_token);
		Assert.assertTrue(true);
		report.flush();

	}


	public static void Logger()
	{

		report.createTest("AfterLogin");
		RequestSpecification res=given().spec(req).body(Data.webapplogger());
		Response response=res.when().post("roccWebAppLogger").then().spec(resspec).extract().response();
		String resp=response.asString();
		JsonPath js=Utils.rawtoJson(resp);
		String expected_status=js.getString("Status");
		System.out.println(expected_status);
		String actual_status="Success";
		Assert.assertEquals(expected_status, actual_status);
		Assert.assertTrue(true);
		report.flush();


	}
}
