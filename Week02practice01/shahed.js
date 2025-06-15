var Calculator = "Savings";
function monthlySavings(allPayments, livingCost) {
    if (!Array.isArray(allPayments) || typeof livingCost !== 'number') {
        return "invalid";
    }

    var IncomeAfterTax = 0;
    for (var i = 0; i < allPayments.length; i++) {
        var payment = allPayments[i];
        if (payment >= 3000) {
            IncomeAfterTax += payment - (payment * 0.20);
        } else {
            IncomeAfterTax += payment;
        }
    }

    var savings = IncomeAfterTax - livingCost;

    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 500));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
