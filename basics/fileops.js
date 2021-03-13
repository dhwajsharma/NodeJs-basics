const fs = require("fs");
const os = require("os");

fs.readFile("random.txt", (err, data) => {
    if (err) throw err

    let nums = data.toString().split(os.EOL)

    let sortedNums = nums.sort((a, b) => b - a)

    fs.writeFile("sorted.txt", sortedNums.join(os.EOL), (err) => {
        if (err) throw err
    })
});