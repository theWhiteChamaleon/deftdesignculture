// Variables for content
var aboutUsContent = "This is a brief description of our company.";
var emailAddress = "deftdigital.india@gmail.com";
var phoneNumber = "+91 9588439955";
var companyAddress = "102, Narmada Heights, DP Road, Pune, 411038";
var slogan = "Your one stop solution for Architecure and Marketing needs"

// Set content in HTML
document.getElementById("aboutUsContent").textContent = aboutUsContent;
document.getElementById("emailLink").href = "mailto:" + emailAddress;
document.getElementById("emailLink").textContent = emailAddress;
document.getElementById("phoneNumber").textContent = phoneNumber;
document.getElementById("companyAddress").textContent = companyAddress;
document.getElementById("slogan").textContent = slogan;
