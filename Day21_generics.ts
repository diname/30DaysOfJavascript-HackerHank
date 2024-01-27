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

function main() {
  // Enter your code here
  const numberQ = +readLine()
  for (let i = 0; i < numberQ; i++) {
    console.log(readLine())
  }
  const wordQ = +readLine()

  for (let i = 0; i < wordQ; i++) {
    console.log(readLine())
  }
}
