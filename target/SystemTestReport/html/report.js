$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/restcountries/features/RestCountriesByCode.feature");
formatter.feature({
  "name": "retrieve capital by country code in an iterative way",
  "description": "",
  "keyword": "Feature"
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
  "name": "I provide the country code as \"\u003ccountryCode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I expect the capital as \"\u003cexpectedCapital\u003e\" and status code a \u003cexpectedStatusCode\u003e and I expect to see error message as \"\u003cexpectedErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "countryCode",
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
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.getRestCountryEndPointByCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country code as \"lb\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.retrieveCountryByCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Beirut\" and status code a 200 and I expect to see error message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.verifyCapitalByCode(java.lang.String,java.lang.Integer,java.lang.String)"
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
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.getRestCountryEndPointByCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country code as \"lb123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.retrieveCountryByCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"\" and status code a 400 and I expect to see error message as \"Bad Request\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.verifyCapitalByCode(java.lang.String,java.lang.Integer,java.lang.String)"
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
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.getRestCountryEndPointByCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country code as \"afg\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.retrieveCountryByCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Kabul\" and status code a 200 and I expect to see error message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.verifyCapitalByCode(java.lang.String,java.lang.Integer,java.lang.String)"
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
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.getRestCountryEndPointByCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country code as \"afgblablabla\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.retrieveCountryByCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"\" and status code a 400 and I expect to see error message as \"Bad Request\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.verifyCapitalByCode(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/restcountries/features/RestCountriesByName.feature");
formatter.feature({
  "name": "retrieve capital by country name in an iterative way",
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
  "name": "I provide the country name as \"\u003ccountryNameCode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I expect the capital as \"\u003cexpectedCapital\u003e\" and status code as \u003cexpectedStatusCode\u003e and I expect to see error message as \"\u003cexpectedErrorMessage\u003e\"",
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
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.getRestCountryEndPointByName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name as \"Lebanon\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.retrieveCountryByName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Beirut\" and status code as 200 and I expect to see error message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.verifyCapitalByName(java.lang.String,java.lang.Integer,java.lang.String)"
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
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.getRestCountryEndPointByName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name as \"Lebanon123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.retrieveCountryByName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"\" and status code as 404 and I expect to see error message as \"Not Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.verifyCapitalByName(java.lang.String,java.lang.Integer,java.lang.String)"
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
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.getRestCountryEndPointByName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name as \"Afghanistan\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.retrieveCountryByName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Kabul\" and status code as 200 and I expect to see error message as \"NONE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.verifyCapitalByName(java.lang.String,java.lang.Integer,java.lang.String)"
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
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.getRestCountryEndPointByName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name as \"Afghanistan123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.retrieveCountryByName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"KNONEabul\" and status code as 404 and I expect to see error message as \"Not Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.verifyCapitalByName(java.lang.String,java.lang.Integer,java.lang.String)"
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
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.getRestCountryEndPointByName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name as \"Angola\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.retrieveCountryByName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Luanda\" and status code as 200 and I expect to see error message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.verifyCapitalByName(java.lang.String,java.lang.Integer,java.lang.String)"
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
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.getRestCountryEndPointByName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the country name as \"Angola 111\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.retrieveCountryByName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect the capital as \"Luanda\" and status code as 404 and I expect to see error message as \"Not Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.restcountries.stepdefinitions.RestCountryOutlineSteps.verifyCapitalByName(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});