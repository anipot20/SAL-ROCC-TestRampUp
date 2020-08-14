package apilogic;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

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

import org.testng.annotations.Listeners;

import Payload.Data;
import apilogic.Utils;



/*
 * 
 * This is a library class
 * 
 */
@Listeners(resources.ListenersTestNG.class)
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



	static RequestSpecification req;
	static ResponseSpecification resspec;
	static String id;
	public static ExtentTest logger;

	static String author_name;

	/*Method to build request and response */
	public  void basic() throws FileNotFoundException

	{

		String uri="http://216.10.245.166/Library";
		PrintStream log=new PrintStream(new FileOutputStream("logging.txt"));
		req=new RequestSpecBuilder().setBaseUri(uri).addFilter(RequestLoggingFilter.logRequestTo(log)).addFilter(ResponseLoggingFilter.logResponseTo(log)).setContentType(ContentType.JSON).build();
		resspec=new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();

	}


	/*Method to Add book to Library*/
	public  String AddBook() 
	{

		RequestSpecification res=given().spec(req).body(Data.AddBook());
		Response response=res.when().post("Addbook.php").then().spec(resspec).extract().response();
		String resp=response.asString();
		JsonPath js=Utils.rawtoJson(resp);
		id=js.get("ID");


		String actual_message=js.getString("Msg");

		return actual_message;
	}

	/*Method to Get book from Library using book id*/
	public  void GetBookbyID()
	{


		RequestSpecification getres=given().queryParam("ID", ""+id+"").spec(req);
		Response getresponse=getres.when().get("GetBook.php").then().spec(resspec).extract().response();
		String resp=getresponse.asString();
	}







	/*Method to delete book from Library using book id*/
	public  String DeleteBook()
	{

		RequestSpecification delres=given().spec(req).body(Data.DelBook(id));
		Response delresponse=delres.when().post("DeleteBook.php").then().spec(resspec).extract().response();
		String response=delresponse.asString();
		JsonPath js=Utils.rawtoJson(response);

		String actual_delmessage=js.getString("msg");

		return actual_delmessage;
	}





}


