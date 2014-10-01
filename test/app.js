/*global factorial*/

describe('app', function() {
    describe('factorial', function() {
        it('should calculate factorial of 3', function() {
            expect(factorial(3)).toEqual(6);
        });
    });
});
