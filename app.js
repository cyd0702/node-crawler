import express, { response } from "express"
import crawler from "./crawler.js"

const app = express();
const PORT = 8000;

// /node/api?q={param}
app.use("/node", (req, res) => {
    try {
        const param = req.query.q;
        //const reuslt = await crawler(param);
        res.status(200).json(
            {test : `${param} req ok`}
        )
    } catch (error) {
        
    }

})

app.use("/", (req, res) => {
    res.status(200).json(
        {test : "test ok"}
     )
})

app.listen(PORT, ()=> {
    console.log("http://localhost:" + process.env.PORT + "가 실행되었습니다.")
})
