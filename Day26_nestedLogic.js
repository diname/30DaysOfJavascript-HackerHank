function processData(input) {
  //Enter your code here
  const [actual, expect] = input.split(/\n/)
  const [day1, month1, year1] = actual.split(' ').map((act) => parseInt(act))
  const [day2, month2, year2] = expect.split(' ').map((exp) => parseInt(exp))
  if (year1 > year2) return console.log(10000)
  if (year1 == year2 && month1 > month2)
    return console.log(500 * (month1 - month2))
  if (year1 == year2 && month1 == month2 && day1 > day2)
    return console.log(15 * (day1 - day2))

  return console.log(0)
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
