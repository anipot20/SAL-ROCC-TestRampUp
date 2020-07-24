package apilogic;
import io.restassured.path.json.JsonPath;

public class Utils {

	public static JsonPath rawtoJson(String response)
	{
		JsonPath js=new JsonPath(response);
		return js;

	}

}

