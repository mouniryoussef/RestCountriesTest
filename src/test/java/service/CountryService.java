package service;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import utilities.CountryApiEnum;
import utilities.CountryProxy;

import io.restassured.RestAssured.*;

import static io.restassured.RestAssured.given;
import static utilities.CountryProxy.getResponse;

public class CountryService {

    private  String countryServiceEndpoint;
    RequestSpecification specification;
    public  Response getCountryByName(String name) {
        specification = given().baseUri(countryServiceEndpoint).basePath("/name");
        specification.pathParam("name", name);
        //specification.when();
        return specification.
                get("/{ name}",name);

    }

    public  Response getCountryByCode(String code) {
        specification = given().baseUri(countryServiceEndpoint).basePath(String.format("/%s", code));
        //specification.pathParam("code", code);
        //specification.when();
        return specification.get();
    }

    public void setCountryEndPoint(CountryApiEnum countryApiEnum) {
        countryServiceEndpoint = CountryProxy.getEndpointURL(countryApiEnum);
    }
}
