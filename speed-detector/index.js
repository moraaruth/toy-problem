function detectSpeed() {
    let detect = prompt('Hello, please enter speed:');

    if (detect <= 70) {
        document.getElementById('text').innerHTML = 'OK';

    }
    else if (((detect - 70) / 5) === 2) {
        document.getElementById('text').innerHTML = 'Points 2';

    }
    else if (((detect - 70) / 5) === 4) {
        document.getElementById('text').innerHTML = 'Points 4';

    }
    else if (((detect - 70) / 5) === 6) {
        document.getElementById('text').innerHTML = 'Points 6';

    }
    else if (((detect - 70) / 5) === 8) {
        document.getElementById('text').innerHTML = 'Points 8';

    }
    else if (((detect - 70) / 5) === 10) {
        document.getElementById('text').innerHTML = 'Points 10';

    }
    else if (((detect - 70) / 5) > 12) {
        document.getElementById('text').innerHTML = 'License Suspended';


    }
    else {
        (`Points = ${((detect - 70) / 5)}`);
    }


}