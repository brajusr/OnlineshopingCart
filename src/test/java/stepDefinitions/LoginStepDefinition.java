package stepDefinitions;

import java.util.Collections;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

	WebDriver driver;
	String inputEamil;

	@Given("^user opens online shopping application$")
	public void user_opens_online_shopping_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\raju.baligolla\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");

		driver = new ChromeDriver();
		
		driver.get("http://advantageonlineshopping.com/#/");
		Thread.sleep(5000);
		driver.manage().window().maximize();
		
	}


	@Then("^checkout the product$")
	public void user_clicks_on_login_buttion() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[@id='checkOutPopUp']")).click();

	}
	
	@When("^i search for product \"([^\"]*)\"$")
	public void i_search_for_product(String product) throws Throwable {
		driver.findElement(By.xpath("//a[@title='SEARCH']")).click();
		driver.findElement(By.xpath("//input[@id='autoComplete']")).sendKeys(product);
		driver.findElement(By.xpath("//p[@class='roboto-regular ng-binding']")).sendKeys(product);
		driver.findElement(By.xpath("//button[@name='save_to_cart']")).click();
		
		
		
	}

	
	

}
