"use strict";
var landingPage = require("./PageObjectModels/LandingPage.js");
var loginPage = require("./PageObjectModels/SignInPage.js");

/*
var HomePage = function() {
	this.signIn = element(by.css("a[data-nav='nav=nav_SignIn']"));
	this.centerStageButtons = element(by.css(".center.stage-buttons"));
	this.viewOnGitHubButton = this.centerStageButtons.all(
			by.css(".btn.btn-large")).get(0);
	this.downloadButton = this.centerStageButtons.element(by
			.css(".btn-primary"));
	this.designDocsButton = this.centerStageButtons.element(by
			.css(".btn-warning"));
}*/
describe('Scenario: Bad credentials using the Bell Portal', function () {
	describe('Given that I go to the CTV website', function () {

		beforeEach(function () {
			browser.get('http://www.ctv.ca');
			browser.ignoreSynchronization = true;
		});
		describe('When I login with bad credentials', function () {

			it('Then I get an error', function () {
				expect(landingPage.signIn.isPresent()).toBe(true);
				browser.sleep(2500);
				landingPage.signIn.click();
				browser.sleep(10500);
				loginPage.signInBellDiv.click();
				browser.sleep(2500);

				// var popUp = element(by.xpath("//div[@id='pageWrap']"))
				// browser.wait(popUp.isPresent, 5000);
				// browser.executeScript("document.getElementById('frame').contentWindow.location.reload();");

				var iframe = browser.driver.findElement(by.xpath("//iframe[@name='ifrBmAuthApi']"));
				browser.driver.switchTo().frame(iframe);

				var until = protractor.ExpectedConditions;
				browser.driver.wait(until.presenceOf(loginPage.userName), 5000, 'Element taking too long to appear in the DOM')
				loginPage.userName.sendKeys("CTV Test");
				browser.sleep(2500);
				//console.log(loginPage.userPassword);
				loginPage.userPassword.sendKeys("this should also work");
				browser.sleep(2500);
				loginPage.loginButton.click();
				browser.sleep(2500);
			});
		});
	});
});


describe('Scenario: Bad credentials using the Bell Portal with expectation of success', function () {
	describe('Given that I go to the CTV website', function () {

		beforeEach(function () {
			browser.get('http://www.ctv.ca');
			browser.ignoreSynchronization = true;
		});
		describe('When I login with bad credentials', function () {

			it('Then I get an error', function () {
				expect(landingPage.signIn.isPresent()).toBe(true);
				browser.sleep(2500);
				landingPage.signIn.click();
				browser.sleep(10500);
				loginPage.signInBellDiv.click();
				browser.sleep(2500);

				// var popUp = element(by.xpath("//div[@id='pageWrap']"))
				// browser.wait(popUp.isPresent, 5000);
				// browser.executeScript("document.getElementById('frame').contentWindow.location.reload();");

				var iframe = browser.driver.findElement(by.xpath("//iframe[@name='ifrBmAuthApi']"));
				browser.driver.switchTo().frame(iframe);

				var until = protractor.ExpectedConditions;
				browser.driver.wait(until.presenceOf(loginPage.userName), 5000, 'Element taking too long to appear in the DOM')
				loginPage.userName.sendKeys("CTV Test");
				browser.sleep(2500);
				//console.log(loginPage.userPassword);
				loginPage.userPassword.sendKeys("this should also work");
				browser.sleep(2500);
				loginPage.loginButton.click();
				browser.sleep(2500);
				landingPage.signIn.click();
			});
		});
	});
});