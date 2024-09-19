let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
};


const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};


const fromDollarToYen = function(valueInDollar) {

    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
};

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
};

// Export the functions
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };