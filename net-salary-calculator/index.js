//adding functions, if/else statement to make my app interactive
let salary = prompt('Hello, please enter your salary + benefits:');
let netPay = salary - (nssf()) - nssf() - paye();

// writing the nssf, nhif, paye, and calculator functions

// nssf function that shows nssf range sample
function nssf() {
    if (salary < 100000) {
        return 200;
    }
    else {
        return 400;
    }



}
// nhif function that shows the nhif range sample

function nhif() {
    if (salary < 100000) {
        return 700;

    }
    else if (salary > 100000 && salary < 200000) {
        return 900;

    }
    else {
        return 1200;
    }
}
// paye function that shows how paye will be calculated
function paye() {
    if (salary < 100000) {
        return (0.2 * salary);

    }
    else {
        return (0.3 * salary);
    }
}
// function that will show what output will be given on html
function salaryCalc() {
    return `salary:${salary};   netpay:${netPay} ; `;

}
// function that ensures the output has been shown on html 
const calculateBtn = () => document.getElementById('salaryCalculator').innerHTML = salaryCalc();
calculateBtn() = text;
document.getElementById('2salaryCalculator').innerHTML = salaryCalc();

// end of js
