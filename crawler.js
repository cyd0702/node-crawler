import puppeteer from "puppeteer";

async function init(param){
    const browser = await puppeteer.launch({headless: false});
    
}

export default init;