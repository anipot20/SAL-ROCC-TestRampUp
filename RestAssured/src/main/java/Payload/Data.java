package Payload;

import java.util.Random;

public class Data {

	public static String AddBook()
	{
		Random r=new Random();
		int aisle=r.nextInt();

		return "{\r\n" + 
		"\r\n" + 
		"\"name\":\"Learn Selenium \",\r\n" + 
		"\"isbn\":\"ccc\",\r\n" + 
		"\"aisle\":\""+aisle+"\",\r\n" + 
		"\"author\":\"Anusha\"\r\n" + 
		"}\r\n" + 
		" ";
	}


	public static String DelBook(String ID)
	{

		return "{\r\n" + 
				" \r\n" + 
				"\"ID\" : \""+ID+"\"\r\n" + 
				" \r\n" + 
				"}\r\n" + 
				"";
	}


	public static String Login()
	{
		return "{\"loginUserName\":\"ghankoo.sal@yopmail.com\",\"loginUserKey\":\"#Welcome123\"}";
	}

	
	public static String webapplogger()
	{
		return "{\"logMsg\":\"{\\\"type\\\":\\\"INFO\\\",\\\"logMessage\\\":\\\"User: ghankoo.sal@yopmail.com logged in successfully\\\"}\"}";
	}


}



