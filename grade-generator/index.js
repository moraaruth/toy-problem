function getScore() {
    let math = document.getElementById("math").value;
    let english = document.getElementById("english").value;
    let kiswahili = document.getElementById("kiswahili").value;
    let science = document.getElementById("science").value;
    let arts = document.getElementById("arts").value;

    let total1 = parseFloat(math) + parseFloat(english) + parseFloat(kiswahili) + parseFloat(science) + parseFloat(arts);
    let marks1 = (total1 * 100) / 500;



    if (marks1 >= 79) {
        document.getElementById('grade1').innerHTML = 'A';
    }
    else if (marks1 >= 60 && marks < 79) {
        document.getElementById('grade1').innerHTML = 'B';
    }
    else if (marks1 >= 49 && marks <= 59) {
        document.getElementById('grade1').innerHTML = 'C';

    }
    else if (marks1 >= 40 && marks < 49) {
        document.getElementById('grade1').innerHTML = 'D';

    }
    else {
        document.getElementById('grade1').innerHTML = 'E';
    }

    document.getElementById('total1').innerHTML = total1;
    document.getElementById('marks1').innerHTML = marks1;

    if (marks1 < 0 || marks1 > 100) {
        alert('Please input correct marks');
    }

}
