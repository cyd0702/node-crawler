import puppeteer from "puppeteer";
import express, { response } from "express"
import crawler from "./crawler.js"
import rochesterCrawler from "./rochesterCrawler.js"

const app = express();
const PORT = 8000;

// /node/api?q={param}
app.use("/node", async (req, res) => {
    try {
        const param = req.query.q;
        const reuslt = await crawler(param)
        res.status(200).json(reuslt)
    } catch (error) {
        res.status(404).send("404 not found")
    }

})

app.use("/rochester", async (req, res) => {
    try {
        const param = req.query.q;
        const reuslt = await rochesterCrawler(param)
        res.status(200).json(reuslt)
    } catch (error) {
        res.status(404).send("404 not found")
    }

})

app.use("/", (req, res) => {
    res.status(200).json(
        {test : "test ok"}
     )
})

app.listen(PORT, ()=> {
    console.log("http://localhost:" + PORT + "가 실행되었습니다.")
})
