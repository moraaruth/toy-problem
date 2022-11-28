//adding functions, if/else statement to make my app interactive


function detectSpeed() {
    // initializing the prompt using prompt method
    let detect = prompt('Hello, please enter speed:');


    // if/else statements

    // if statement for  speed below 70
    if (detect <= 70) {
        document.getElementById('text').innerHTML = 'OK';

    }
    // if statement for speed at 80
    else if (((detect - 70) / 5) === 2) {
        document.getElementById('text').innerHTML = 'Points 2';

    }
    // if statment for speed at 90
    else if (((detect - 70) / 5) === 4) {
        document.getElementById('text').innerHTML = 'Points 4';

    }
    // if statment for speed at 100
    else if (((detect - 70) / 5) === 6) {
        document.getElementById('text').innerHTML = 'Points 6';

    }
    // if statment for speed at 110
    else if (((detect - 70) / 5) === 8) {
        document.getElementById('text').innerHTML = 'Points 8';

    }
    // if statment for speed at 120
    else if (((detect - 70) / 5) === 10) {
        document.getElementById('text').innerHTML = 'Points 10';

    }
    // if statment for speed at greater than 140
    else if (((detect - 70) / 5) > 12) {
        document.getElementById('text').innerHTML = 'License Suspended';


    }
    else {
        (`Points = ${((detect - 70) / 5)}`);
    }


}