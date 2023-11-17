import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Friend!</h1>
<div>
You are wonderful. You are smart. You are beautiful.
You will succeed. You are a developer. You will get a job when it's the right job for you. </div>
`;
//Just practicing some JavaScript from @shecodes
alert("Ola");

let name = "Jody";
alert(name);

//prompt
let firstName = prompt("What is your first name");
let lastName = prompt("What is your last name");
let fullName = firstName + " " + lastName;
alert(fullName);

//if statement
let country = prompt("What country are you from?");

if (country === "Portugal") {
  alert("You are cool");
}

if (country !== "Portugal") {
  alert("Too bad for you");
}

//if else stmt
let age = prompt("How old are you?");

if (age < 18) {
  alert("You cannot apply");
} else {
  alert("You can apply");
}

//nested if else stmts
if (age < 18) {
  alert("you can't apply");
} else {
  if (age > 120) {
    alert("you can't apply");
  } else {
    alert("you can apply");
  }
}

//Logical Or: ||
if (age < 18 || gender === "male") {
  alert("You can't join SheCodes 👩‍💻");
}  //code will be executed if one stmt is true

//Logical And: && executed if both stmts true
let continent = "usa";
let language = "english";
if (continent === "Europe" && language === "Portuguese") {
  alert("You are from Portugal 🇵🇹");
} else {
  alert("You are not from Portugal");
}

//create date
let date = Date.parse("01 Jan 2025 00:00:00 GMT");

//date data curent time
let now = new Date();
now.getMinutes(); // 0,1,2, 12
now.getHours(); //1, 2, 3, 4
now.getDate(); //1, 2, 3, 4
now.getDay(); // 0, 1, 2
now.getMonth(); // 0, 1, 2
now.getFullYear(); // 2023

//Numbers
//Round
Math.round(4.7) // round to closest whole number 5
Math.floor(4.7) // round down 4
Math.ceil(4.7) // rounds up 5
Math.min(2, 5, 1) // 1  lowest number
Math.max(2, 5, 1); // 5
Math.random(); // 0.47231881595639025


//string concatenation
let firstName = "Julie";
let lastName = "Johnson";
let fullName = firstName + " " + lastName; // "Julie Johnson"

//or
let fullName = `${firstName} ${lastName}`;

//trim
let cityC = " Montreal  ";
cityC.trim(); // "Montreal"

//replace
let city = "Montreal";
city = city.replace("e", "é"); // "Montréal"

//lower upper case
let city1 = "Montreal";
city1 = city1.toLowerCase(); // "montreal"

let city2 = "Montreal";
city2 = city2.toUpperCase(); // "MONTREAL"

//template literal
let city3 = "Denver";
let sentence = `Kate is from ${city3}`; // Kate is from Denver

//EVENTS
//event listener The sayHi function will be executed each time the city element is clicked. 
//Click is the most common event type but you can also use click | mouseenter | mouseleave | mousedown | mouseup | mousemove | keydown | keyup.
function sayHi() {
  alert("hi");
}

let element = document.querySelector("#city");
element.addEventListener("click", sayHi);

//element manipulation
let li = document.querySelector("li#special");
li.classList.remove("liked");
li.classList.add("something");
//Updated the element class names.

//Updating the html content of the selected element
let li1 = document.querySelector("li1")
li1.innerHTML = "Hello World";

//FORMS
//<form>  this goes in the html file
//  <input type="text" id="email" />
//</form>   The event will be triggered by clicking the button or pressing enter.

function signUp(event) {
  event.preventDefault(); //prevents form from resubmitting
  let input = document.querySelector("#email"); //selects the input element with the id "email" and stores it in the input variable.
  console.log(input.value); 
}
let form = document.querySelector("form");  //select form element
form.addEventListener("submit", signUp); // triggers/calls the signup function when the form is submitted(eventlistener)

//LOOPS
//while loop - the console shows numbers 0-9
let times = 0;
while (times < 10) {
  console.log(times);
  times = times + 1;
}

//for loop
for (let i = 0; i < 10; i++) { //iterate from 0-9, variable starts at 0 and increments by 1 in each iteration. The loop continues as long as i is less than 10
  console.log("i is " + i);
} //is is 0, i is 1, i is 2, i is 3.....etc

//for loop iterates over the elements of an array called myList:
for (let i = 0; i < myList.length; i++) {
  alert("I have " + myList[i] + " in my shopping bag");
}

// Returns the first element (if any) on the page matching the selector.
let li = document.querySelector("li");
let day = document.querySelector(".day");
let paragraph = document.querySelector("ul#list p");

//querySelectorAll  Returns all elements (if any) on the page matching the selector.
let lis = document.querySelectorAll("li");
let paragraphs = document.querySelectorAll("li#special p");

//AJAX with Fetch
let root = 'https://jsonplaceholder.typicode.com'  //using fetch api to make a network request to the url
let path = 'users/1'

fetch(root + '/' + path)  //fetch function used to make a GET network request
  .then(response => ( //returns a promise that resolves to the response .json()
    response.json() //parse the response body as JSON
  ))
  .then(json => (  //logs the parsed JSON data to the console
    console.log(json)
  ));

  //AJAX with the Axios library through a script tag and makes use of Axios to fetch user data from the JSONPlaceholder API when the page loa
  <!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <script>
      function showUser(response) {
        alert(`The user name is ${response.data.name}`);
      }

      let url = "https://jsonplaceholder.typicode.com/users/1";
      axios.get(url).then(showUser);
    </script>
  </body>
</html>

//Geolocation API
function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(handlePosition)
//The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.