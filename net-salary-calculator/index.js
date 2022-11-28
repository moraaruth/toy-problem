let salary = prompt('Hello, please enter your salary + benefits:');
let netPay = salary - (nssf()) - nssf() - paye();

function nssf() {
    if (salary < 100000) {
        return 200;
    }
    else {
        return 400;
    }



}

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

function paye() {
    if (salary < 100000) {
        return (0.2 * salary);

    }
    else {
        return (0.3 * salary);
    }
}
function salaryCalc() {
    return `salary:${salary};   netpay:${netPay} ; `;

}
const calculateBtn = () => document.getElementById('salaryCalculator').innerHTML = salaryCalc();
calculateBtn() = text;
document.getElementById('2salaryCalculator').innerHTML = salaryCalc();


