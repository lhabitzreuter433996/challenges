let targetNumber = 0
let currentPosition = 6

const isPrimeNumber = number => {
  for(var i = 2; i < number; i++) {
    if(number % i === 0) return false
  }
  return number > 1
}

for (let index = 15; currentPosition !== 10001; index = index + 2) {
  if (isPrimeNumber(index)) {
    targetNumber = index
    currentPosition++
  }
}

console.log(targetNumber)