function getScore() {
    let marks1 = prompt("Please enter your score");


    if (marks1 < 0 || marks1 > 100) {

        document.getElementById('text').innerHTML = "Hello, Please enter valid marks!";
        document.getElementById('marks1').innerHTML = 'Invalid';
        document.getElementById('grade1').innerHTML = 'null';

    }

    else if (marks1 >= 79) {
        document.getElementById('grade1').innerHTML = 'A';
        document.getElementById('text').innerHTML = "Hello, You have grade A";
    }
    else if (marks1 >= 60 && marks1 < 79) {
        document.getElementById('grade1').innerHTML = 'B';
        document.getElementById('text').innerHTML = "Hello, You have grade B";
    }
    else if (marks1 >= 49 && marks1 <= 59) {
        document.getElementById('grade1').innerHTML = 'C';
        document.getElementById('text').innerHTML = "Hello, You have grade C";

    }
    else if (marks1 >= 40 && marks1 < 49) {
        document.getElementById('grade1').innerHTML = 'D';
        document.getElementById('text').innerHTML = "Hello, You have grade D";

    }
    else {
        document.getElementById('grade1').innerHTML = 'E';
        document.getElementById('text').innerHTML = "Hello, You have grade E";
    }


    document.getElementById('marks1').innerHTML = marks1;

}
