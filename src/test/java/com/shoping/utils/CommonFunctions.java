package com.shoping.utils;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CommonFunctions {
	
	static WebDriver driver;
	
	static void enterValueInTextBox(By identifyBy,String identifiedValue, String value)
	{
		
		driver.findElement(By.name("username")).sendKeys(value);
		
		if(identifiedValue.equals("id"))
			driver.findElement(identifyBy).sendKeys(value);
		
		else if(identifiedValue.equals("name"))
			driver.findElement(identifyBy).sendKeys(value);
		
		if(identifiedValue.equals("xpath"))
			driver.findElement(identifyBy).sendKeys(value);
		
	}

	
}
