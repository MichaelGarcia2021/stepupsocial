function getAge() {
var mes= prompt("what is your name");
alert(`hello ${mes}`);
}

getAge();

function sayHello (){
var mes= prompt ("What is your name?");
document.getElementById("demo-6").innerHTML= "hello" + message1;
}

function toCelsius (f) {
    return (5/9) * (f-32);
}

document.getElementById("demo-0").innerHTML = toCelsius(77);
document.getElementById("demo-1").innerHTML = toCelsius(35);
document.getElementById("demo-2").innerHTML = toCelsius(20);





function calculateDeg(){

var degree= document.getElementById("deg").value;
var tempCalc = (5/9) * (degree-32);
console.log("your degree is" + tempCalc +  "in fahrenheit");

document.getElementById("celDeg").innerHTML = math.round(tempCalc);
}



document.write('Hello World'+'<br/>'); 
document.write('Hello World'+'<br/>'); 
document.write('Hello World'+'<br/>'); 
document.write('Hello World'+'<br/>'); 
document.write('Hello World'+'<br/>'); 
document.write('Hello World'+'<br/>'); 
document.write('Hello World'+'<br/>'); 
document.write('Hello World'+'<br/>'); 
document.write('Hello World'+'<br/>'); 
document.write('Hello World'+'<br/>'); 

for(i=0; i<10; i++) {
    if (i=== 7) {
    break;
    }
    document.write("The number is" + i + "<br>");
}
