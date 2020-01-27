package utilities;

import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.jackson.internal.jackson.jaxrs.json.JacksonJsonProvider;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

public class CountryProxy {

    public static String getEndpointURL(CountryApiEnum countryApiEnum) {
        switch (countryApiEnum) {
            case BY_NAME:
                return ConfigurationProperties.INSTANCE.getApiTargetapiForCountryName();
            case BY_CODE:
                return ConfigurationProperties.INSTANCE.getApiTargetapiForCountryCode();
        }
        throw new IllegalArgumentException("Invalid CountryApiEnum value!");
    }

    public static Response getResponse(String restCountryEndPoint, String countryNameCode) {
        Client client = ClientBuilder.newClient(new ClientConfig(JacksonJsonProvider.class));
        return client
                .target(restCountryEndPoint)
                .path("/" + countryNameCode)
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(Response.class);
    }
}
