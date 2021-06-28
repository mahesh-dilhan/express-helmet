const express = require("express")
const helmet = require("helmet")

const PORT = 3000

const app = express()

app.use(helmet())
app.get('',(req,res)=>{
   res.send('<h1>Helmet</h1>')
});
app.listen(PORT, () => {
    console.log(" listening ")
})