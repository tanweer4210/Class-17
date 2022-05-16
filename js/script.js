// Result Calculator
document.write('<h2>Result Calculator</h2>');
marks = 60;

if(marks >= 80 && marks <= 100){
    document.write('your result is A+');
}
else if(marks >= 70 && marks <= 79){
    document.write('your result is A');
}
else if(marks >= 60 && marks <= 69){
    document.write('your result is A-');
}
else if(marks >= 50 && marks <= 59){
    document.write('your result is B');
}
else if(marks >= 40 && marks <= 49){
    document.write('your result is C');
}
else if(marks >= 33 && marks <= 39){
    document.write('your result is D');
}
else if(marks >= 0 && marks <= 32){
    document.write('your result is F');
}
else{
    document.write('your input marks is invalid');
}

// Even Odd Number Print

document.write('<h1>Even Odd Number Print</h1>');

const number = "60";

if(number % 2 === 0){
    document.write('Even Number');
}
else if(number % 2 ===1){
    document.write('Odd Number');
}
else{
    document.write('Invalid input');
}

// Print 100 to 1

document.write('<h1>Print 100 to 1</h1>');

for(let i = 100; i >= 1; i--){
    document.write(i + `<br>`);
}
