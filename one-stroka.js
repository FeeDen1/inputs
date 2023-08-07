const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
process.stdin.on("data", data => {
    data = data.toString().split(' ')
    let total = parseInt(data[0])
    let rateSize = parseInt(data[1])
    let extraRateSize = parseInt(data[3])
    let costOfExtra = parseInt(data[2])
    if(extraRateSize > rateSize){
        total += (extraRateSize - rateSize) * costOfExtra
    }
    process.stdout.write(total.toString())

})