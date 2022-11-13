var cont = true;
var riskaversion = 1;
var multiplier = 2;
var val = 1000;
var topend = val * multiplier;
var bottomend = val * 0.5;

//function to direct webpage
function direct_to_page() {
  if (multiplier < 3) {
    window.location.href = "highRisk.html";
  }else if (multiplier < 6) {
    window.location.href = "mediumRisk.html";
  }else{
    window.location.href = "lowRisk.html";
  }
}



// function to calculate the result of the survey
function evaluate_risk() {
    // get a list of the radio inputs on the page
    var answerbox = document.getElementById('prompt');
    var choices = document.getElementsByTagName('input');
    answerbox.innerHTML ="You have a 50% chance to gain $" + topend + ", and a 50% chance to lose your $1000";
    for (i=0; i<choices.length; i++) {
      if (choices[i].checked) {
        if (choices[i].value == "Yes") {
          cont = false;
          direct_to_page()
        }
        else if (choices[i].value == "No") {
          multiplier +=1;
          topend = val * multiplier;
          bottomend = val * 0.5;
        }
      }
    }
  }