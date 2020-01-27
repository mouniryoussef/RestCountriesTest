package service;

import utilities.CountryApiEnum;
import utilities.CountryProxy;

import javax.ws.rs.core.Response;

import static utilities.CountryProxy.getResponse;

public class CountryService {

    private static String countryServiceEndpoint;

    public static Response getCountryByName(String name) {
        return getResponse(countryServiceEndpoint, name);
    }

    public static Response getCountryByCode(String code) {
        return getResponse(countryServiceEndpoint, code);
    }

    public static void setCountryEndPoint(CountryApiEnum countryApiEnum) {
        countryServiceEndpoint = CountryProxy.getEndpointURL(countryApiEnum);
    }
}
