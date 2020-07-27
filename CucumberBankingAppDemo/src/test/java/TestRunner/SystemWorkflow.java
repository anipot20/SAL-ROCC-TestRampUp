package TestRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/java/Features"}, glue ={"StepDefinitions"},
        monochrome=true, dryRun = false,
        plugin={"pretty","html:target/HtmlReports/SystemWorkflows/SystemWorkflows.html",
                "junit:target/JunitReports/report.xml",
                "json:target/JsonReports/report.json"
        },
        tags = "@SystemWorkflow"




)
class SystemWorkflow {

}
