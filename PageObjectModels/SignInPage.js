/**
 * 
 */
var exports = module.exports = {};

exports.signInBellDiv = element(by.xpath("//div[@data-name='Bell']/img"))
exports.userName = element(by.xpath("//input[@name='USER']"))
//exports.userName = element(by.css("#USER"))
exports.userPassword = element(by.xpath("//input[@name='PASSWORD']"))
exports.loginButton = element(by.xpath("//input[@type='submit']"))
exports.errorMessage = element(by.xpath("//div[@class='error']"))
/*
exports.signInLabel = element(by.css('label[for=new_session_username]'));
exports.signInAccount = element(by.css('#new_session_username'));
exports.signInPassword = element(by.css('#new_session_password'));
exports.submitButton = element(by.css('#sign_in'));
exports.errorMessage = element(by.xpath('//span[@class="alert_icon"]'))
*/