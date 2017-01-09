const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

//unit tests for the "fizzBuzzer" function
describe('fizzBuzzer', function(){
	//testing the normal case
	it('should return "fizz-buzz" for multiples of 15', function() {
   		[15, 30, 45].forEach(function(input) {
      		fizzBuzzer(input).should.equal('fizz-buzz');
    	});
  	});

    it('should return "fizz" for multiples of 3', function() {
   		[3, 6, 9, 12].forEach(function(input) {
      		fizzBuzzer(input).should.equal('fizz');
   		});
  	});

  	it('should return "buzz" for multiples of 5', function() {
    	[5, 10, 20].forEach(function(input) {
     		fizzBuzzer(input).should.equal('buzz');
    	});
  	});

  	it('should return number if not mult of 3 or 5', function() {
    	[1, 2, 4, 7].forEach(function(input) {
      		fizzBuzzer(input).should.equal(input);
    	});
  	});

	it ('should raise error if argument is not a number', function(){
		// range of bad inputs of non-number arguments
		const badInputs = ['a', true, false];
		// prove that an error is raised for these inputs
		badInputs.forEach(function(input){
			(function() {
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	});
});