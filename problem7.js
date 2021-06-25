let targetNumber = 0
let currentPosition = 6

const isPrimeNumber = number => {
  if(number % 2 === 0) return false

  for(var i = 3; i < number; i = i + 2) {
    if(number % i === 0) return false
  }
  return true
}

for (let index = 15; currentPosition !== 10001; index = index + 2) {
  if (isPrimeNumber(index)) {
    targetNumber = index
    currentPosition++
  }
}

console.log(targetNumber)