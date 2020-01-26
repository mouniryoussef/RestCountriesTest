Feature: retrieve capital by country name or country code in an iterative way

  @functionalBasicTestOutlineForCountryByName
  Scenario Outline: Get capital by country name
    Given I have access to country name api
    When I provide the country name or code as "<countryNameCode>"
    Then I expect the capital as "<expectedCapital>" and I expect to see error code as <expectedStatusCode> and I expect to see error message as "<expectedErrorMessage>"
  Examples:
  |countryNameCode    |expectedCapital|expectedStatusCode|expectedErrorMessage|
  |Lebanon        |Beirut         |200               |                    |
  |Lebanon123     |               |404               |Not Found           |
  |Afghanistan    |Kabul          |200               |NONE                |
  |Afghanistan123 |KNONEabul      |404               |Not Found           |
  |Angola         |Luanda         |200               |                    |
  |Angola 111     |Luanda         |404               |Not Found           |

  @functionalBasicTestOutlineForCountryByCode
  Scenario Outline: Get capital by country code
    Given I have access to country code api
    When I provide the country name or code as "<countryNameCode>"
    Then I expect the capital as "<expectedCapital>" and I expect to see error code as <expectedStatusCode> and I expect to see error message as "<expectedErrorMessage>"
    Examples:
      |countryNameCode|expectedCapital|expectedStatusCode|expectedErrorMessage|
      |lb             |Beirut         |200               |                    |
      |lb123          |               |400               |Bad Request         |
      |afg            |Kabul          |200               |                    |
      |afgblablabla   |               |400               |Bad Request         |