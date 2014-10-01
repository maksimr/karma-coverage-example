/*jshint unused:false*/

/**
 * Factorial function
 * @param {number} n Number
 * @param {number} The factorial of n
 */
function factorial(n) {
    function factorialIter(n, a) {
        if (n === 0) {
            return a;
        }

        if (n < 0) {
            return a;
        }

        return factorialIter(n - 1, n * a);
    }

    return factorialIter(n, 1);
}
