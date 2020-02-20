package com.restcountries.stepdefinitions;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import model.Country;
import model.Message;
import service.CountryService;
import utilities.CountryApiEnum;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class RestCountryOutlineSteps {
    String responseJsonData;
    Message message;
    Integer responseStatusCode;
    Response response;
    CountryService countryservice = new CountryService();
    @Given("I have access to country name api")
    public void setRestCountryEndPointByName() {
        countryservice.setCountryEndPoint(CountryApiEnum.BY_NAME);
    }

    @Given("I have access to country code api")
    public void setRestCountryEndPointByCode() {
        countryservice.setCountryEndPoint(CountryApiEnum.BY_CODE);
    }

    @When("I provide the country code as {string}")
    public void retrieveCountryByCode(String countryCode) {
        response = countryservice.getCountryByCode(countryCode);
        responseJsonData = response.jsonPath().prettify();
        responseStatusCode = response.statusCode();
    }

    @Then("I expect the capital as {string} and status code a {int} and I expect to see error message as {string}")
    public void verifyCapitalByCode(String expectedCapital, Integer expectedStatusCode, String expectedErrorMessage) throws IOException {
       // response.then().body("", equalTo(5));
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);

        if (responseStatusCode == 200) {
            // work with dynamic list is better than static table
            List<Country> countriesList = Arrays.asList(mapper.readValue(responseJsonData, Country[].class));
            assertNotNull(countriesList);
            assertEquals("status code not match the expected one", expectedStatusCode, responseStatusCode);
            assertEquals("actual capital does not match the expected one", expectedCapital, countriesList.get(0).getCapital());
        } else {
            message = mapper.readValue(responseJsonData, Message.class);
            assertEquals("status code retrieved not matched", expectedStatusCode, message.getStatus());
            assertEquals("Error message retrieved not matched", expectedErrorMessage, message.getMessage());
        }
    }

    @When("I provide the country name as {string}")
    public void retrieveCountryByName(String countryName) {
        Response response = countryservice.getCountryByName(countryName);
        responseJsonData = response.jsonPath().prettify();
        responseStatusCode = response.statusCode();
    }

    @Then("I expect the capital as {string} and status code as {int} and I expect to see error message as {string}")
    public void verifyCapitalByName(String expectedCapital, Integer expectedStatusCode, String expectedErrorMessage) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);

        if (responseStatusCode == 200) {
            // work with dynamic list is better than static table
            List<Country> countriesList = Arrays.asList(mapper.readValue(responseJsonData, Country[].class));
            assertNotNull(countriesList);
            assertEquals("status code not match the expected one", expectedStatusCode, responseStatusCode);
            assertEquals("actual capital does not match the expected one", expectedCapital, countriesList.get(0).getCapital());
        } else {
            message = mapper.readValue(responseJsonData, Message.class);
            assertEquals("status code retrieved not matched", expectedStatusCode, message.getStatus());
            assertEquals("Error message retrieved not matched", expectedErrorMessage, message.getMessage());
        }
    }
}
