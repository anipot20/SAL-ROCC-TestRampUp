package libraryService;

import java.io.FileNotFoundException;

import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import apilogic.Library;


/*Library API: POST,GET,DELETE*/
public class LibraryTest extends Library {

	
	@BeforeTest(groups= {"Regression"})
	public void initialize() throws FileNotFoundException
	{
		super.basic();
		super.config();
	}
	
	
	/*POST*/
	@Test
	(groups= {"Regression"},priority=1)
	public void LibraryPOST()
	{
		String expected_message="successfully added";


		String actual=super.AddBook();
		Assert.assertEquals(expected_message ,actual);
		System.out.println(actual);
		Assert.assertTrue(true);

	}

	/*GET*/
	@Test(priority=2)
	public void LibraryGET()
	{
		super.GetBookbyID();
		Assert.assertTrue(true);
	}


	/*DELETE*/
	@Test(groups= {"Regression"},priority=3,dependsOnMethods= {"LibraryPOST"})

	public void LibraryDelete()
	{
		String expected_delmessage="book is successfully deleted";
		String actual_delmessage=super.DeleteBook();
		Assert.assertEquals(expected_delmessage, actual_delmessage);
		Assert.assertTrue(true);

	}

}
