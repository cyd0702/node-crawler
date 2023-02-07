import puppeteer from "puppeteer";
//import StealthPlugin from "puppeteer-extra-plugin-stealth";

async function init(param){
    try {
    const browser = await puppeteer.launch({headless: false});
    browser.userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36");
    const page = await browser.newPage()
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36")

    //page.on("load", e =>{} );
    //page.waitForSelector 최대 대기시간
    //page.setDefaultTimeout(15000)
    await page.goto(`https://www.rocelec.com/search?q=${param}`,{ "waitUntil": "domcontentloaded"})
    // const getCookie = await page.cookies();
    // const cookiee = JSON.stringify(getCookie);
    // console.log(cookiee);
 
    // await page.setCookie(...cookie);
    // await page.goto(`https://www.arrow.com/en/products/search?cate=&r=true&q=${param}`,{ "waitUntil": "domcontentloaded"})
   
    // await page.evaluate((partnumber) => {
    //     document.querySelector("input[name='q']").value = partnumber
    // }, [param])

    // await page.click(".Embedded-search-button")

    const result = await page.evaluate((partnumber) => {
        if(document.querySelector(".SearchResults-results .SearchResults-resultRow")){
           return {res : "ok"}
        }

        if(document.querySelector(".Product-Summary")){
            return {res : "nope"}
        }

        return {res: "yepp"}

    }, [param, browser])

    // await page.close()
    // await browser.close()
    }catch(err){
        console.log(err);
    }
    return result

}

export default init;