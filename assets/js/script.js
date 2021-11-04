var mySpan = document.querySelector(".progressSpan"),
   mySecondSpan = document.getElementById("mySecondSpan"),
   myAmex = document.getElementById('amex-Span'),
   myStripe = document.getElementById('stripe-Span'),
   myBrex = document.getElementById('brex-Span'),
   myLifeTimeSpan = document.querySelector('.lifetime-style'),
   myVendor = document.getElementById("vendor"),
   myMedia = document.getElementById("media"),
   myCorp = document.getElementById("corp"),
   myTeam = document.getElementById("team"),
   myLifeTimeSpanValue = document.getElementById("lifetimeSpanValue"),
   myUnlimitedSpanValue = document.getElementById("unlimitedSpanValue"),
   myAmexSpanValue = document.getElementById("amex-span-value"),
   myStripeSpanValue = document.getElementById("stripe-span-value"),
   myBrexSpanValue = document.getElementById("brex-span-value"),
   myViewCard = document.getElementById("viewCard"),
   myFinalResult = document.querySelector(".final-result"),
   AmexBrand = document.querySelector(".amex-Brand"),
   StripeBrand = document.querySelector(".stripe-Brand"),
   BrexBrand = document.querySelector(".brex-Brand");


window.onload = function spanWidth() {
  
  mySpan.classList.add('span-style');
  mySecondSpan.classList.add('span-style');
  myAmex.classList.add('span-brand-style');
  myStripe.classList.add('span-brand-style');
  myBrex.classList.add('span-brand-style');
  
}


function sum() {
  
  inputOne = myVendor.value;
  inputTwo = myMedia.value;
  inputThree = myCorp.value;
  inputFour = myTeam.value;
  var result = parseInt(inputOne) + parseInt(inputTwo) + parseInt(inputThree) + parseInt(inputFour);
  if (!isNaN(result)) {

    var manageFloatLifeTime = (result * 1.2).toFixed(2);
    myLifeTimeSpanValue.innerText = manageFloatLifeTime  + ' $';

    var manageFloatUnlimited = (result * 1.1).toFixed(2);
    myUnlimitedSpanValue.innerText = manageFloatUnlimited  + ' $';
    myViewCard.style.display= 'none';
    myFinalResult.style.display= 'block';
    // myAmexSpanValue.innerHTML = result * 0.3;
  }
}

function amexCalc() {
  inputOne = myVendor.value;
  inputTwo = myMedia.value;
  inputThree = myCorp.value;
  inputFour = myTeam.value;
  var result = parseInt(inputOne) + parseInt(inputTwo) + parseInt(inputThree) + parseInt(inputFour);
  if (!isNaN(result)) {
    let manageAmexFloat = (result * 1.3).toFixed(2);
    myAmexSpanValue.innerText = manageAmexFloat + ' $';
  }
  BrexBrand.style.display = 'none';
  StripeBrand.style.display = 'none';
  AmexBrand.style.display = 'flex';
}

function stripeCalc() {
  inputOne = myVendor.value;
  inputTwo = myMedia.value;
  inputThree = myCorp.value;
  inputFour = myTeam.value;
  var result = parseInt(inputOne) + parseInt(inputTwo) + parseInt(inputThree) + parseInt(inputFour);
  if (!isNaN(result)) {
    let manageStripeFloat = (result * 2.9).toFixed(2);
    myStripeSpanValue.innerText = manageStripeFloat + ' $';
  }

  BrexBrand.style.display = 'none'
  AmexBrand.style.display = 'none';
  StripeBrand.style.display = 'flex';

}

function brexCalc() {
  inputOne = myVendor.value;
  inputTwo = myMedia.value;
  inputThree = myCorp.value;
  inputFour = myTeam.value;
  var result = parseInt(inputOne) + parseInt(inputTwo) + parseInt(inputThree) + parseInt(inputFour);
  if (!isNaN(result)) {
    let manageBrexFloat = (result * 0.3).toFixed(2);
    myBrexSpanValue.innerText = manageBrexFloat + ' $';
  }
  StripeBrand.style.display = 'none';
  AmexBrand.style.display = 'none';
  BrexBrand.style.display = 'flex';


}

