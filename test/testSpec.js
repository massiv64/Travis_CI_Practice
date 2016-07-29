const expect = require('chai').expect

describe("Addition", () => {
	it('it will make sure the addition function works', () => {
		expect(1+1).to.equal(2)
	});
	it('will make sure 1 + 1 isnt 3', () => {
		expect(1+1).to.not.equal(3)
	})
})