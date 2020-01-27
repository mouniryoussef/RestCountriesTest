Feature: retrieve capital by country code in an iterative way

  @functionalBasicTestOutlineForCountryByCode
  Scenario Outline: Get capital by country code
    Given I have access to country code api
    When I provide the country code as "<countryCode>"
    Then I expect the capital as "<expectedCapital>" and status code a <expectedStatusCode> and I expect to see error message as "<expectedErrorMessage>"
    Examples:
      | countryCode  | expectedCapital | expectedStatusCode | expectedErrorMessage |
      | lb           | Beirut          | 200                |                      |
      | lb123        |                 | 400                | Bad Request          |
      | afg          | Kabul           | 200                |                      |
      | afgblablabla |                 | 400                | Bad Request          |