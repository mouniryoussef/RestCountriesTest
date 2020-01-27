package com.restcountries.testrunners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src/test/resources/com/restcountries/features"},
		glue= {"com.restcountries.stepdefinitions"},
		tags= {"@functionalBasicTestOutlineForCountryByName or @functionalBasicTestOutlineForCountryByCode"},
		plugin= {"pretty",
				"html:target/SystemTestReport/html",
				"junit:target/SystemTestReport/junit/report.xml",
				"json:target/SystemTestReport/json/report.json"},
				monochrome=true
		)
public class RestCountriesRunnerTest {

}
