
package  com.restcountries.utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * Helper enum singleton to handle configuration properties.
 * 
 * @author Mounir Youssef
 * 
 */
public enum ConfigurationProperties {

  /** The singleton instance. */
  INSTANCE;

  /** Path to the configuration properties file. */
  private final String FILE_PATH = "resources" + File.separator + File.separator + 
                                    "application.properties";

 
// api attributes
  private final String apitargetcountryname;
  private final String apitargetcountrycode;
 
    
   /**
   * Enum constructor.
   */
  private ConfigurationProperties() {
    final Properties properties = new Properties();
    try {
      properties.load(new FileInputStream(FILE_PATH));
    } catch (FileNotFoundException exception) {
      try {
               
        InputStream inputStream = getClass().getResourceAsStream("/application.properties");
        //now can use this input stream as usually, i.e. to load as properties
        properties.load(inputStream);
      } 
      catch (FileNotFoundException fnfe) {
        System.out.println("application.properties has not been found");
        fnfe.printStackTrace();
      } catch (IOException ioe) {
        System.out.println("application.properties has not been found");
        ioe.printStackTrace();
      }
    } catch (IOException exception) {
      exception.printStackTrace();
    } 
          
   // api section
    apitargetcountryname=properties.getProperty("api.target.countryname");
    apitargetcountrycode=properties.getProperty("api.target.countrycode");
  }
        
   /**
   * Get the apirequetstarget for country name
   * 
   * @return the apitargetcountryname.
   */
  public String getApiTargetapiForCountryName() {
    return apitargetcountryname;
  }
  /**
   * Get the apirequetstarget for country code
   * 
   * @return the apitargetcountrycode.
   */
  public String getApiTargetapiForCountryCode() {
    return apitargetcountrycode;
  }
}
