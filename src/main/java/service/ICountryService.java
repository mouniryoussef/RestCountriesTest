package service;

import javax.ws.rs.core.Response;

public interface ICountryService {

    Response getCountryByName(String name);

    Response getCountryByCode(String code);


}
