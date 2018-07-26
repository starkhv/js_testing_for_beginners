import day2 from '../../src/day2';

describe('day 2 tests', () => {

	describe('check data types', () => {

		it('should return undefined if no parameters passed', () => {
			expect(day2()).to.be.undefined;
		});

		it('should return a string when a string is passed', () => {
			expect(day2('a string')).to.be.a('string');
		});

		it('should return a number when a number is passed', () => {
			expect(day2(10)).to.be.a('Number');
		});

		it('should not return a number when a string is passed', () => {
			expect(day2('a string')).to.not.be.a('Number');
		});

	});

	describe('check equals', () => {

		it('should equal to string passed', () => {
			expect(day2('same string')).to.equal('same string');
		});

		it('should deep equal the object passed', () => {
			const givenObject = {
				hello: 'world',
			}
			expect(day2(givenObject)).to.deep.equal(givenObject);
		});
	});

	describe('checking contains', () => {

		it('should contain part of the string passed', () => {
			expect(day2('hello world')).to.contain('world');
		});
	});


	describe('throws error', () => {
		it('should throw an error when "error" is passed', () => {
			function wrappedFunction(){
				day2('error');
			}
			expect(wrappedFunction).to.throw('Cannot pass error');
		});
	});
});
