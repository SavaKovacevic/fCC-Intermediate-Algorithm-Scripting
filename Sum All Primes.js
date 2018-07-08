// Intermediate Algorithm Scripting: Sum All Primes
// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {
  let arr = []
  for (var i = 2; i <= num; i++) {
    var notPrime = false;
    for (var j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      arr.push(i);
    }
  } 
  return arr.reduce((a,b) => a+b);
}

sumPrimes(977);
// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.