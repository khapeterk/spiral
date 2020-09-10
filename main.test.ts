import spiral from "./spiral";

describe('spiral ascension function', () => {
	it('should return a size 1 spiral', () => {
		expect(spiral(1)).toBe('1');
	})
	it('should return a size 2 spiral', () => {
		expect(spiral(2)).toBe('1 2\n4 3');
	})
	it('should return a size 3 spiral', () => {
		expect(spiral(3)).toBe('1 2 3\n8 9 4\n7 6 5');
	})
	it('should return a size 10 spiral', () => {
		spiral(10)
	})
})