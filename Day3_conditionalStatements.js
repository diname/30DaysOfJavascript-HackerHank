// Day 3: Intro to Conditional Statements

'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin
})

process.stdin.on('end', function () {
  inputString = inputString.split('\n')

  main()
})

function readLine() {
  const n = Number(inputString)
  console.log(n % 2 === 1 || (n > 5 && n <= 20) ? 'Weird' : 'Not Weird')
  return inputString[currentLine++]
}

function main() {
  const N = parseInt(readLine().trim(), 10)
}
