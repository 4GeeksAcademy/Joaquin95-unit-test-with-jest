const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');


test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(1)).toBe(1.07); // 1 euro = 1.07 dollars
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745); // 3.5 euros = 3.745 dollars
});


test("One dollar should be approximately 146.26 yen", () => {
   
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62); // 10 dollars to yen
});


test("100 yen should be approximately 0.556 British pounds", () => {
    
    expect(fromYenToPound(100)).toBeCloseTo(0.556);
});