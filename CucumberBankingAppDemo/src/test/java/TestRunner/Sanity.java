package TestRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/java/Features"}, glue ={"StepDefinitions"},
        monochrome=true, dryRun = false,
        plugin={"pretty","html:target/HtmlReports/SanityResults.html",
                "junit:target/JunitReports/SanityResults.xml",
                "json:target/JsonReports/SanityResults.json"
        },
        tags="@Sanity"




)
class Sanity {

}
