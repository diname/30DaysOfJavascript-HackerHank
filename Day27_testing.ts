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

class TestDataEmptyArray {
  get_array(): number[] {
    return []
  }
}

class TestDataUniqueValues {
  get_array(): number[] {
    return [3, 6, 9, 2, 4, 8]
  }

  get_expected_result(): number {
    return 3
  }
}

class TestDataExactlyTwoDifferentMinimums {
  get_array(): number[] {
    return [4, 3, 4, 5, 4, 3]
  }

  get_expected_result(): number {
    return 1
  }
}

function main() {
  const t: number = parseInt(readLine().trim(), 10)

  for (let tItr: number = 0; tItr < t; tItr++) {
    const firstMultipleInput: string[] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')

    const n: number = parseInt(firstMultipleInput[0], 10)

    const k: number = parseInt(firstMultipleInput[1], 10)

    const a: number[] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((aTemp) => parseInt(aTemp, 10))
  }
  console.log('OK')
}
