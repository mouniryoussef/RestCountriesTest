package main;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import model.Country;
import model.Message;
import service.CountryService;
import utilities.CountryApiEnum;

import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class CountryApp {

    public static void main(String[] args) throws IOException {

        //Choice shout be one the 3 options
        while (true) {
            Scanner scan = new Scanner(System.in);
            System.out.println("Please enter your choice to find the capital(c = Country code, n = Country name, q to Quit):");
            String userInput = scan.nextLine();
            if (userInput.equalsIgnoreCase("q") || userInput.equalsIgnoreCase("c") || userInput.equalsIgnoreCase("n")) {
                //Quit
                if (userInput.equalsIgnoreCase("q")) {
                    System.out.println("Application Ended");
                    return;
                } else {
                    if (userInput.equalsIgnoreCase("c")) {
                        System.out.println("Please enter the country code (2 or 3 letters): ");
                        String countryCode = scan.next();
                        //Input is valid
                        if (countryCode != null && countryCode.length() >= 2 && countryCode.length() <= 3) {
                            CountryService.setCountryEndPoint(CountryApiEnum.BY_CODE);
                            Response countryByCodeResponse = CountryService.getCountryByCode(countryCode);
                            manageResponse(countryByCodeResponse);
                            System.out.println("to call country endpoint by code");
                        } else {
                            System.err.println("Invalid country code!!!");
                        }
                        //call country endpoint by code
                    } else {
                        //call country endpoint by name
                        System.out.println("Please enter the country name: ");
                        String countryName = scan.next();
                        if (countryName != null) {
                            CountryService.setCountryEndPoint(CountryApiEnum.BY_NAME);
                            Response countryByNameResponse = CountryService.getCountryByName(countryName);
                            manageResponse(countryByNameResponse);
                        } else {
                            System.err.println("Invalid country name!!!");
                        }
                    }
                }
            } else {
                System.out.println("Invalid choice!!!:" + userInput + ":");
            }
        }
    }

    private static void manageResponse(Response response) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);

        if ( response.getStatus() == 200) {
            String responseJsonData = response.readEntity(String.class);
            // work with dynamic list is better than static table
            List<Country> countriesList = Arrays.asList(mapper.readValue(responseJsonData, Country[].class));

            if(!countriesList.isEmpty()){
                String capitalName = countriesList.get(0).getCapital();
                System.out.println("capital Name is : " +capitalName);
            }else{
                System.out.println("transaction successfully completed without data returned back!");
            }

        } else {
            String responseJsonData = response.readEntity(String.class);
            Message message = mapper.readValue(responseJsonData, Message.class);
            System.out.println("No Capital returned back: " +"Status code: "+ message.getStatus()+ " and " +"Error message: "+message.getMessage());
        }
    }
}

