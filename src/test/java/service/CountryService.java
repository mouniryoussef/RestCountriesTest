package service;

import io.restassured.response.Response;
import utilities.CountryApiEnum;
import utilities.CountryProxy;

import io.restassured.RestAssured.*;

import static io.restassured.RestAssured.given;
import static utilities.CountryProxy.getResponse;

public class CountryService {

    private  String countryServiceEndpoint;

    public  Response getCountryByName(String name) {
        return given().
                    pathParam("name", name).
                when().
                get(countryServiceEndpoint + "/{ name}",name);

    }

    public  Response getCountryByCode(String code) {
        return
                given().
                        pathParam("code", code).
               when().
                get(countryServiceEndpoint + "/{ code}",code);
    }

    public void setCountryEndPoint(CountryApiEnum countryApiEnum) {
        countryServiceEndpoint = CountryProxy.getEndpointURL(countryApiEnum);
    }
}
