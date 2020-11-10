
let year = 2020;

describe("Get year dates", () => {

    beforeEach(() => {
        year = 2020;
    })

    it("should be a number", () => {
        //year = parseInt(year);
        expect(year).toBe(2020);

    })

    it("should be next year", () => {
     year += 1;
    expect(year).toBe(2021);
    });


    it("should be in the next 2 years", () => {
     year += 2;
        expect(year).toBe(2022);
    });

});


//calculator function and testing suite

var Calculator = function() {
    return {
        add: function(a, b){
            return a + b;
        },

        subtract: function(a, b){
            return a - b;
        },

        multiply: function(a, b){
            return a * b;
        },

        divide: function(a, b){
            return a / b;
        }
    }
}

describe("calculator suite", function(){

    //setup
    var calculator = new Calculator();

    it('should add two numbers together', function(){
       sum = 9 //the expected sum
       result = calculator.add(2,7); //the result from your function
       expect(result).toBe(sum);
    })

    it('should subtract two numbers from each other', function(){
       difference = 5;  //the expected difference
       result = calculator.subtract(8,3); //the result from your function
       expect(result).toBe(difference);
    })

    it('should multiply two numbers together', function(){
       product = 4; //the expected sum
       result = calculator.multiply(1,4); //the result from your function
       expect(result).toBe(product);
    })

    it('should divide one number from another', function(){
       quotient = 3; //the expected sum
       result = calculator.divide(6,2); //the result from your function
       expect(result).toBe(quotient);
    })


})

