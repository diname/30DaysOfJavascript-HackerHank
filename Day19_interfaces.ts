'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')
let inputString: string = ''
let inputLines: string[] = []
let currentLine: number = 0
process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin
})

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n')
  inputString = ''
  main()
})

function readLine(): string {
  return inputLines[currentLine++]
}

function divisorSum(num: any) {
  let divisors = []

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisors.push(i)
  }

  return divisors.reduce((acc, cur) => acc + cur, 0)
}

function main() {
  // Enter your code here~
  const num = readLine()
  const sum = divisorSum(+num)

  console.log('I implemented: AdvancedArithmetic')
  console.log(sum)
}
