const express = require("express")


const app = express()

app.use(express.static(__dirname + "/html"))

app.get("/calc/:op", (req, res) => {
    let result = 0;
    console.log(req.params);
    console.log(req.query);
    const var1 = parseInt(req.query.var1);
    const var2 = parseInt(req.query.var2);
    switch (req.params.op) {
        case "add": result = var1 + var2;
            break;
        case "sub": result = var1 - var2;
            break;
        case "mult": result = var1 * var2;
            break;
        case "div": result = var1 / var2;
            break;
    }


    res.send(`
    <html>
        <body>
            <h1>Result = ${result}</h1>
        </body>
    </html>
    `)
})

app.listen(4432, () => {
    console.log("server started on http://localhost:4432");
})