/* 
  # Author: Dharma Raj Poudel
  # Author URL: www.drpoudel.com.np
  # Licence: GPL
  # hello() - used for displaying the general messsage
*/



function hello()
  {
     //alert("Hello form function");
}

//Declaring the variables
var num1 = 10;
num2 = 20.45
let num3 = 30;
sum = num1 + num2 + num3;
document.write("<br/> The sum of " + num1 + " , " + num2 + " ," + num3 + " is " + sum);

var firstName = "Dharma";

var confirm = true;
var days = ['Sunday' , 'Monday'];

var check=num1>num2;
//alert(check);
/*
testnum = 29;
if(testnum%2 == 0) {
  alert("Even");  
}
else {
  alert("Odd");
}
*/
num1 = 5;
num2 = 4
if(num1 === num2) {
  document.write("True")
}
else {
  document.write("False");
}

/*
var username = "dharma";
var password = "P@ssw0rd";
var phone = 9851163785;
if ( password == "P@ssw0rd" && (username == "dharma" || phone == "9851163785" )) {
  alert("Hurray Login Success ");
}
else {
  alert ("Credentials not match");
}
 */
a = 10;
document.write("<br/>"+
  a <= 5 ?
  "a is less than or equal to 5" :
  "a is greater than 5"
  )

  counter = 1;
  while(counter <= 5){
    document.getElementById("result").innerHTML+= "Counter: " + counter + "<br>";
    counter++;
  }
/*
  var num = parseInt(prompt("Enter the number "));
  document.getElementById("multable").innerHTML+= "<table border=1 width=300px>";
  for(i = 1; i <= 10; i++){

    var mul = i * num;
    document.getElementById("multable").innerHTML+= "<tr><td>"+ num + " x " +  i  + " = "+ mul +"<br/></td></tr>";
  }
  document.getElementById("multable").innerHTML+= "</table>";
*/
  
 document.write(parseInt(3.1415927))
 var num1 = 5;
 var num2 = "5";
 add = parseInt(num1) + parseInt(num2);
 document.write("<br/>The sum is "+add);


 //array with date
 var da = new Date();
 var yr =  da.getFullYear();
 var dat = da.getDate();
 var mon = da.getMonth();
 var day = da.getDay();

 var tday = new Array("Sunday" , "Monday", "Tuesday" ,"Wednesday" ,"Thursday", "Friday", "Saturday");
 var today = tday[day]
 var months = new Array("Jan", "Feb", "Mar", "Apr", "May" , "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
 var cmonth=months[mon];
 document.getElementById("date").innerHTML="Date: " + today+ ", " +cmonth + " "+ dat + " "+ yr;


function getTotal(){
 var qty=document.getElementById("qty").value;
 var price=document.getElementById("price").value
 var total=qty*price;
 document.getElementById("nettotal").innerHTML=total;
 return false;
}

function ranImage(){
var myCollection = new Array("images/1.jpg" , "images/2.jpg" , "images/3.jpg" , "images/4.jpg" , "images/5.jpg" , "images/6.jpg")
var randomImage = Math.floor(Math.random()*myCollection.length)
document.getElementById("randomImages").src=myCollection[randomImage];
}

//September 8
// Multidimension Arrya
//JavaScript Live Clock
//Math Object

//String Object
var email = "k@meGmal.com";
//alert(email.charAt(2));

var checkat = email.indexOf("@");
var checkdot = email.lastIndexOf(".")
if(checkat >= 1 && checkdot >=1 ) {
   document.write("<br/> Valid Email" ); }
else {
   document.write("<br>Not valid Email");  }

//
document.write("<br> Total length of email "+ email.length);
document.write ("<br>Substring " + email.substr(-4)) ; 
document.write ("<br>toUpperCase " + email.toUpperCase()) ; 
document.write("<br/>toLowerCase " + email.toLowerCase())

function validateForm(){
  var email = document.login.eml.value;
  var pass =  document.login.password.value;
  var checkat = email.indexOf("@");
  var checkdot = email.lastIndexOf(".")

   if(email == "" && pass == "")
   {
    document.getElementById("errorMessage").innerHTML = "Email and Password Required";  
    document.login.eml.focus();
    return false;
   }
   else if(email == ""){
    document.getElementById("errorMessage").innerHTML = "Email is Required";  
    document.login.eml.focus();
    return false;
   }
   else if(pass == ""){
    document.getElementById("errorMessage").innerHTML = "Password is Required";  
    document.login.password.focus();
    return false;
   }
   else if(checkat <= 2 && checkdot <=2 ) {
    document.getElementById("errorMessage").innerHTML = "Email Not Valid";  
    document.login.eml.focus();
    return false;
   }
  else if(email == "dharmarajpoudel@gmail.com" && pass == "dharma123")
  {
    window.location.href = "/welcome.html";
    return false;
  }
  else {
    document.getElementById("errorMessage").innerHTML = "Username and Password Not Valid";  
    document.login.eml.focus();
    return false;
  }
return true;
}


//DOm 14th September 2020
//Ex- slider every 3 second images changes.
//hint < body onload="slider()" > call garne
//window.addEventListener("load", slider, false);
//20th Sept 2020

function admissionOpen(){
  window.open('/admissionopen.html','popUpWindow','height=470,width=960,left=100,top=100,resizable=no,scrollbars=no,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
}



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
