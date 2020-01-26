$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/restcountries/features/RestCountriesOutline.feature");
formatter.feature({
  "name": "retrieve capital by country name or country code in an iterative way",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Get capital by country name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByName"
    }
  ]
});
formatter.step({
  "name": "I have access to country name api",
  "keyword": "Given "
});
formatter.step({
  "name": "I provide the country name or code as \"\u003ccountryNameCode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I expect the capital as \"\u003cexpectedCapital\u003e\" and I expect to see error code as \u003cexpectedStatusCode\u003e and I expect to see error message as \"\u003cexpectedErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "countryNameCode",
        "expectedCapital",
        "expectedStatusCode",
        "expectedErrorMessage"
      ]
    },
    {
      "cells": [
        "Lebanon",
        "Beirut",
        "200",
        ""
      ]
    },
    {
      "cells": [
        "Lebanon123",
        "",
        "404",
        "Not Found"
      ]
    },
    {
      "cells": [
        "Afghanistan",
        "Kabul",
        "200",
        "NONE"
      ]
    },
    {
      "cells": [
        "Afghanistan123",
        "KNONEabul",
        "404",
        "Not Found"
      ]
    },
    {
      "cells": [
        "Angola",
        "Luanda",
        "200",
        ""
      ]
    },
    {
      "cells": [
        "Angola 111",
        "Luanda",
        "404",
        "Not Found"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get capital by country name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByName"
    }
  ]
});
formatter.step({
  "name": "I have access to country name api",
  "keyword": "Given "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.i_have_access_to_country_name_rest_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name or code as \"Lebanon\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.RetrieveCountryByNameOrCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Beirut\" and I expect to see error code as 200 and I expect to see error message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.VerifyCapital(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get capital by country name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByName"
    }
  ]
});
formatter.step({
  "name": "I have access to country name api",
  "keyword": "Given "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.i_have_access_to_country_name_rest_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name or code as \"Lebanon123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.RetrieveCountryByNameOrCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"\" and I expect to see error code as 404 and I expect to see error message as \"Not Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.VerifyCapital(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get capital by country name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByName"
    }
  ]
});
formatter.step({
  "name": "I have access to country name api",
  "keyword": "Given "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.i_have_access_to_country_name_rest_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name or code as \"Afghanistan\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.RetrieveCountryByNameOrCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Kabul\" and I expect to see error code as 200 and I expect to see error message as \"NONE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.VerifyCapital(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get capital by country name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByName"
    }
  ]
});
formatter.step({
  "name": "I have access to country name api",
  "keyword": "Given "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.i_have_access_to_country_name_rest_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name or code as \"Afghanistan123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.RetrieveCountryByNameOrCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"KNONEabul\" and I expect to see error code as 404 and I expect to see error message as \"Not Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.VerifyCapital(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get capital by country name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByName"
    }
  ]
});
formatter.step({
  "name": "I have access to country name api",
  "keyword": "Given "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.i_have_access_to_country_name_rest_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name or code as \"Angola\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.RetrieveCountryByNameOrCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Luanda\" and I expect to see error code as 200 and I expect to see error message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.VerifyCapital(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get capital by country name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByName"
    }
  ]
});
formatter.step({
  "name": "I have access to country name api",
  "keyword": "Given "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.i_have_access_to_country_name_rest_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name or code as \"Angola 111\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.RetrieveCountryByNameOrCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Luanda\" and I expect to see error code as 404 and I expect to see error message as \"Not Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.VerifyCapital(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get capital by country code",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByCode"
    }
  ]
});
formatter.step({
  "name": "I have access to country code api",
  "keyword": "Given "
});
formatter.step({
  "name": "I provide the country name or code as \"\u003ccountryNameCode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I expect the capital as \"\u003cexpectedCapital\u003e\" and I expect to see error code as \u003cexpectedStatusCode\u003e and I expect to see error message as \"\u003cexpectedErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "countryNameCode",
        "expectedCapital",
        "expectedStatusCode",
        "expectedErrorMessage"
      ]
    },
    {
      "cells": [
        "lb",
        "Beirut",
        "200",
        ""
      ]
    },
    {
      "cells": [
        "lb123",
        "",
        "400",
        "Bad Request"
      ]
    },
    {
      "cells": [
        "afg",
        "Kabul",
        "200",
        ""
      ]
    },
    {
      "cells": [
        "afgblablabla",
        "",
        "400",
        "Bad Request"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get capital by country code",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByCode"
    }
  ]
});
formatter.step({
  "name": "I have access to country code api",
  "keyword": "Given "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.GetRestCountryCodeEndPoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name or code as \"lb\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.RetrieveCountryByNameOrCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Beirut\" and I expect to see error code as 200 and I expect to see error message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.VerifyCapital(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get capital by country code",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByCode"
    }
  ]
});
formatter.step({
  "name": "I have access to country code api",
  "keyword": "Given "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.GetRestCountryCodeEndPoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name or code as \"lb123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.RetrieveCountryByNameOrCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"\" and I expect to see error code as 400 and I expect to see error message as \"Bad Request\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.VerifyCapital(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get capital by country code",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByCode"
    }
  ]
});
formatter.step({
  "name": "I have access to country code api",
  "keyword": "Given "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.GetRestCountryCodeEndPoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name or code as \"afg\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.RetrieveCountryByNameOrCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Kabul\" and I expect to see error code as 200 and I expect to see error message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.VerifyCapital(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get capital by country code",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functionalBasicTestOutlineForCountryByCode"
    }
  ]
});
formatter.step({
  "name": "I have access to country code api",
  "keyword": "Given "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.GetRestCountryCodeEndPoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name or code as \"afgblablabla\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.RetrieveCountryByNameOrCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"\" and I expect to see error code as 400 and I expect to see error message as \"Bad Request\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.VerifyCapital(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});