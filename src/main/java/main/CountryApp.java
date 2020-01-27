package main;

import service.CountryService;
import utilities.CountryApiEnum;

import javax.ws.rs.core.Response;
import java.util.Scanner;

public class CountryApp {

    public static void main(String[] args) {

        //Choice shout be one the 3 options
        while (true) {
            Scanner scan = new Scanner(System.in);
            System.out.println("Please enter your choice (C = Country code, N = Country name, q to Quit):");
            String userInput = scan.nextLine();
            if (userInput.equalsIgnoreCase("q") || userInput.equalsIgnoreCase("c") || userInput.equalsIgnoreCase("n")) {
                //Quit
                if (userInput.equalsIgnoreCase("q")) {
                    System.out.println("Program Ended");
                    return;
                } else {
                    if (userInput.equalsIgnoreCase("c")) {
                        System.out.println("Please enter the country code (2 or 3 letters): ");
                        String countryCode = scan.next();
                        //Input is valid
                        if (countryCode != null && countryCode.length() >= 2 && countryCode.length() <= 3) {
                            CountryService.setCountryEndPoint(CountryApiEnum.BY_CODE);
                            Response countryByCode = CountryService.getCountryByCode(countryCode);
                            manageResponse(countryByCode);
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
                            Response countryByName = CountryService.getCountryByName(countryName);
                            manageResponse(countryByName);
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

    private static void manageResponse(Response response) {

    }
}

