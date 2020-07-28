package apilogic;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
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
import Payload.Data;


/*
 * 
 * This is a library class
 * 
 */

public class Library   {


	public enum Constants
	{
		ID("id");
		private String value;
		public String getValue()
		{
			return value;
		}
		Constants (String value)
		{
			this.value=value;
		}

	}

	static ExtentTest test;
	static ExtentReports report;
	static RequestSpecification req;
	static ResponseSpecification resspec;
	static String id;

	static String author_name;

   /*Method to build request and response */
	public  void basic() throws FileNotFoundException

	{

		String uri="http://216.10.245.166/Library";
		PrintStream log=new PrintStream(new FileOutputStream("logging.txt"));
		req=new RequestSpecBuilder().setBaseUri(uri).addFilter(RequestLoggingFilter.logRequestTo(log)).addFilter(ResponseLoggingFilter.logResponseTo(log)).setContentType(ContentType.JSON).build();
		resspec=new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();

	}

    /*Method to create a html reports*/
	public static void config()
	{

		String path=System.getProperty("user.dir")+"\\reports\\index.html";
		ExtentSparkReporter reporter=new ExtentSparkReporter(path);
		reporter.config().setReportName("RestAssured Reports");
		report=new ExtentReports();
		report.attachReporter(reporter);
		report.setSystemInfo("Windows", "Chrome");

	}

	/*Method to Add book to Library*/
	public  String AddBook() 
	{
		report.createTest("AddBook");
		RequestSpecification res=given().spec(req).body(Data.AddBook());
		Response response=res.when().post("Addbook.php").then().spec(resspec).extract().response();
		String resp=response.asString();
		JsonPath js=Utils.rawtoJson(resp);
		id=js.get("ID");
		System.out.println("Calling POST API to add book");
		System.out.println("ID generated for recently added book:" +id);
		String actual_message=js.getString("Msg");
		report.flush();
		return actual_message;
	}

	/*Method to Get book from Library using book id*/
	public  void GetBookbyID()
	{

		report.createTest("GetBook");
		RequestSpecification getres=given().queryParam("ID", ""+id+"").spec(req);
		Response getresponse=getres.when().get("GetBook.php").then().spec(resspec).extract().response();
		System.out.println("Calling GET API to get the book details for id:" +id);
		System.out.println("Requested book details are:");
		String resp=getresponse.asString();
		System.out.println(resp);
		report.flush();
	}



	/*Method to delete book from Library using book id*/
	public  String DeleteBook()
	{
		report.createTest("DeleteBook");
		RequestSpecification delres=given().spec(req).body(Data.DelBook(id));
		Response delresponse=delres.when().post("DeleteBook.php").then().spec(resspec).extract().response();
		String response=delresponse.asString();
		JsonPath js=Utils.rawtoJson(response);
		System.out.println("Calling Delete API to delete book for the given id:" +id);
		String actual_delmessage=js.getString("msg");
		report.flush();
		return actual_delmessage;
	}

}


