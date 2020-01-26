package com.restcountries.stepdefinitions;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.restcountries.javaobjects.Country;
import com.restcountries.javaobjects.Message;
import com.restcountries.utilities.ConfigurationProperties;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.jackson.internal.jackson.jaxrs.json.JacksonJsonProvider;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

//import java.io.IOException;
//import javax.ws.rs.core.HttpHeaders;
public class RestCountryOutlineSteps {
    Country country;
    String restCountryEndPoint;
    String capital;
    String responseJsonData;
    Message message;
    Integer responseStatusCode;

    @Given("I have access to country name api")
    public void i_have_access_to_country_name_rest_api() {
        restCountryEndPoint = ConfigurationProperties.INSTANCE.getApiTargetapiForCountryName();
    }
    @Given("I have access to country code api")
    public void GetRestCountryCodeEndPoint()  {
        restCountryEndPoint = ConfigurationProperties.INSTANCE.getApiTargetapiForCountryCode();
    }

    @When("I provide the country name or code as {string}")
    public void RetrieveCountryByNameOrCode(String countryNameCode) {
        Response response;
        Client client = ClientBuilder.newClient(new ClientConfig(JacksonJsonProvider.class));
        response = client
                .target(restCountryEndPoint)
                .path("/"+countryNameCode)
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(Response.class);
        responseJsonData = response.readEntity(String.class);
        responseStatusCode = response.getStatus();
    }

    @Then("I expect the capital as {string} and I expect to see error code as {int} and I expect to see error message as {string}")
    public void VerifyCapital(String expectedCapital, Integer expectedStatusCode, String expectedErrorMessage) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);

        if (responseStatusCode == 200) {
            Country[] countries = mapper.readValue(responseJsonData, Country[].class);
            // work with dynamic list is better than static table
            List<Country> coutriesList = Arrays.asList(countries);
            country = coutriesList.get(0);
            capital = country.getCapital();
            assertEquals("status code not match the expected one",expectedStatusCode, responseStatusCode);
            assertEquals("actual capital does not match the expected one",expectedCapital, capital);
        }
        else {
            message = mapper.readValue(responseJsonData, Message.class);
            assertEquals("status code retrieved not matched",expectedStatusCode, message.getStatus());
            assertEquals("Error message retrieved not matched",expectedErrorMessage, message.getMessage());
        }
    }

}
