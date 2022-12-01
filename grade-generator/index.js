//adding functions, if/else statement to make my app interactive
function getScore() {
    // initializing the prompt using prompt method
    let marks1 = prompt("Please enter your score");

    // if statement that will ensure the grade is between 0 and 100
    if (marks1 < 0 || marks1 > 100) {

        document.getElementById('text').innerHTML = "Hello, Please enter valid marks!";
        document.getElementById('marks1').innerHTML = 'Invalid';
        document.getElementById('grade1').innerHTML = 'null';

    }
    // else if statement to give 'A' grade

    else if (marks1 >= 79) {
        document.getElementById('grade1').innerHTML = 'A';
        document.getElementById('text').innerHTML = "Hello, You have grade A";
    }
    // else if statement to give 'B' grade
    else if (marks1 >= 60 && marks1 < 79) {
        document.getElementById('grade1').innerHTML = 'B';
        document.getElementById('text').innerHTML = "Hello, You have grade B";
    }
    // else if statement to give 'C' grade
    else if (marks1 >= 50 && marks1 <= 59) {
        document.getElementById('grade1').innerHTML = 'C';
        document.getElementById('text').innerHTML = "Hello, You have grade C";

    }
    // else if statement to give 'D' grade
    else if (marks1 >= 40 && marks1 <= 49) {
        document.getElementById('grade1').innerHTML = 'D';
        document.getElementById('text').innerHTML = "Hello, You have grade D";

    }
    // else if statement to give 'E' grade
    else {
        document.getElementById('grade1').innerHTML = 'E';
        document.getElementById('text').innerHTML = "Hello, You have grade E";
    }


    document.getElementById('marks1').innerHTML = marks1;

}

console.log(getScore());
// end of js
