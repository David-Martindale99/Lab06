//Global Variables
let futureValue
let investment
let rate
let years

//Collect values from the user
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'))
rate       = parseFloat(prompt('Enter the rate that you are hoping to get on your investment as xx.x'))
years      = parseInt(prompt('How many years do you want to invest for?'))

//Calculate the future value 
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue *= 1 + (rate / 100)
//  futureValue = futureValue * (1 + (rate / 100));
}

//Dispaly the results
document.write(`Investment amount: $${investment.toFixed(2)}<br>`)
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}`)