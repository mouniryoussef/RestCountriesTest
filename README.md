## Restful api Country automation test using BDD
All this does is to show you how to install and run Cucumber scenarios to test estfull api
There is a two feature files with one scenario outilene with 4 examples each. Each scenario has three steps to validate the basic functionality of the api. note that performance test scenarios are not covered here
##Get the code
#Git:

git clone https://github.com/mouniryoussef/RestCountriesTest.git  
cd RestCountriesTest

#Use Maven  
Open a command window and run  
mvn package  
This command will compile and test the feature files and also generate the jar file  

mvn test  
This command will run the RunnerTest that validate the cucumber features : src/test/resources/com/restcountries/features/RestCountriesByCode.feature and src/test/resources/com/restcountries/features/RestCountriesByName.feature files    

java -jar target/RestCountriesTest-1.0.0-SNAPSHOT.jar  
This Command will execute the CountryApp main java class to run the country/capital application  

##BBD reports  
under target/SystemTestReport you will find 3 reports in html, json and xml format  

## BDD features code refactory  
the cucumber features and step definitions are yet to be completed as we still need to refactor the code and alo performance test is in the plan to be added later
