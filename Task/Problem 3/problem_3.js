const largestPrimeFactor = (number) => {
    let largestFactor = number;

    for (let i = 2; i <= Math.sqrt(largestFactor); i++) {
        if (!(largestFactor % i)) {
            let factor = largestFactor / i;
            let candidate = largestPrimeFactor(factor);

            return i > candidate ? i : candidate;
        }
    }

    return largestFactor;
}


function largestPrimeFactor(number) {
    let prime = 2,
        max = 1;
    while (prime <= number) {
        if (number % prime == 0) {
            max = prime;
            number = number / prime;
        } else prime++; //Only increment the prime number if the number isn't divisible by it
    }
    return max;
}