alert("AKAN NAMES");
function showAlert(){
  var CC=parseInt(document.getElementById("century").value);
  var YY=parseInt(document.getElementById("year").value);
  var MM=parseInt(document.getElementById("month").value);
  var DD=parseInt(document.getElementById("day").value);

  var day=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


var birthday = new Date (YY  +  "/" + MM + "/" + DD );
let dayOfBirth = birthday.getDay();

var gender = document.querySelector('input[name="gender"]:checked').value;
var dayOfTheWeek= parseInt(( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;

if (birthday !="" && gender == "female") {
alert("hello" + ", you were born on " + day[dayOfBirth] + ", your Akan name is " + femaleNames[dayOfBirth] + ".");
}
else if (birthday !="" && gender == "male") {
    alert("hello" + ", you were born on " + day[dayOfBirth] + ", your Akan name is " + maleNames[dayOfBirth] + ".");
    }
    else{
        alert ("all fields are required")
    }
}

