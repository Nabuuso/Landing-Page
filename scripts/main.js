alert("AKAN NAMES");
function names(){
  var CC=parseInt(document.getElementById("name-1").value);
  var YY=parseInt(document.getElementById("name-2").value);
  var MM=parseInt(document.getElementById("name-3").value);
  var DD=parseInt(document.getElementById("name-4").value);

  var day=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if(CC.value==""||YY.value==""||MM.value==""||DD.value=="");
}
var gender = document.querySelector('input[name="gender"]:checked').value;
var dayOfTheWeek= parseInt(( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;

if(gender==="male"){
    if(dayOfTheWeek===0){
        alert("you were born:"+ day[0]);
        alert("Your Akan name is:"+ maleNames[0]);
        alert("Your Akan name is: " + maleNames[0]); 
    }else if(dayOfTheWeek===1){
        alert("you were born:"+ day[1]);
        alert("Your Akan name is:"+maleNames[1]);
        alert("Your Akan name is: " + maleNames[1]);
    }else if(dayOfTheWeek===2){
        alert("you were born:"+ day[2]);
        alert("Your Akan name is:"+maleNames[2]);
        alert("Your Akan name is: " + maleNames[2]);
    }else if(dayOfTheWeek===3){
        alert("you were born:"+ day[3]);
        alert("Your Akan name is:"+maleNames[3]);
        alert("Your Akan name is: " + maleNames[3]);
    }else if(dayOfTheWeek===4){
        alert("you were born:"+ day[4]);
        alert("Your Akan name is:"+maleNames[4]);
        alert("Your Akan name is: " + maleNames[5]);
    }else if(dayOfTheWeek===5){
        alert("you were born:"+ day[5]);
        alert("Your Akan name is:"+maleNames[5]);
        alert("Your Akan name is: " + maleNames[5]);
    }else if(dayOfTheWeek===6){
        alert("you were born:"+ day[6]);
        alert("Your Akan name is:"+maleNames[6]);
        alert("Your Akan name is: " + maleNames[6]);
    }




