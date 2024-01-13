// Day 6: Let's Review

function processData(input) {
  //Enter your code here
  let inputArray = input.split('\n')
  inputArray.shift()
  for (let i = 0; i < inputArray.length; i++) {
    let string = inputArray[i].toString()
    let evens = ''
    let odds = ''
    for (let j = 0; j < string.length; j++) {
      j % 2 ? (odds += string[j]) : (evens += string[j])
    }
    console.log(evens + ' ' + odds)
  }
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', function (input) {
  _input += input
})

process.stdin.on('end', function () {
  processData(_input)
})
