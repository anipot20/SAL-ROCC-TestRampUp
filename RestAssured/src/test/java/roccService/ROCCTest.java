package roccService;
import org.testng.annotations.Test;

import apilogic.ROCClogin;

public class ROCCTest {

	@Test(priority=1,enabled=false)
	public void Login()
	{
       ROCClogin.Login();
    }
	
	@Test(priority=2,enabled=false)
	public void Logger()
	{
      ROCClogin.Logger();
	}
}
