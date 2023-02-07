import puppeteer from "puppeteer-extra";
import {executablePath} from "puppeteer";
import stealth from "puppeteer-extra-plugin-stealth"
//import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(stealth())
async function init(param){
    try {
    const browser = await puppeteer.launch({headless: false, executablePath : executablePath()});
    browser.userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36");
    const page = await browser.newPage()
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36")

    const cookie = [{
            "name": "_hjAbsoluteSessionInProgress",
            "value": "1"
        },
        {
            "name": "RT",
            "value": "\"z=1&dm=arrow.com&si=bfb7918c-7532-4225-b287-544471716e5d&ss=ldth6yu9&sl=2&tt=b3h&bcn=%2F%2F684d0d4c.akstat.io%2F\""
        },
        {
            "name": "utag_main",
            "value": "v_id:0186292c5e7d000cfe8ec0e3bad60506f001606700bd0$_sn:1$_se:2$_ss:0$_st:1675729829791$ses_id:1675728019071%3Bexp-session$_pn:1%3Bexp-session"
        },
        {
            "name": "__qca",
            "value": "P0-2046299302-1675728020732"
        },
        {
            "name": "_hjSession_1995675",
            "value": "eyJpZCI6IjAwNTY5M2QwLTk0NjktNGZiZC04YmU0LWI2NjNjNGNmNjE4YSIsImNyZWF0ZWQiOjE2NzU3MjgwMjM5MTYsImluU2FtcGxlIjpmYWxzZX0="
        },
        {
            "name": "_uetsid",
            "value": "69876e70a67a11ed9029c3401644ed72"
        },
        {
            "name": "arrowcache",
            "value": "a=EMPTY&cu=ko-KR&is=KRW&ne=False"
        },
        {
            "name": "_uetvid",
            "value": "6987a180a67a11ed862db31260966daf"
        },
        {
            "name": "bm_sz",
            "value": "D6BF79F537582F0D6E2DCFA248CC8B25~YAAQhePfrTbt8s6FAQAA2MIrKRIJgBqrXwgXrQxbdCU8kk6fv1UgTE5CZyswmbMS1BVQNRmiT8Exo4EQVXPggmzvIcY0gO7r2hchu5yJMMX7wFDt6yUeqabM3Mnrn+jq2sa6aNuiklXtPSyI/uL0IuZpt6BrcxofDktm7N7kaa+kkcM0ztQNHzOF4RvuxOn24iVL2RkNB3anGL36ZuOa+97+cnyMTpgL+IzGMGwV4r0DSZp5WOCJHtBZPVLSIYTC+642/6FFAjhWTzSeOJOYKQqovnWAM/e0cxNEovjgcMFV3g==~3552825~3290434"
        },
        {
            "name": "_gid",
            "value": "GA1.2.1400677392.1675728021"
        },
        {
            "name": "_gcl_au",
            "value": "1.1.1152268473.1675728019"
        },
        {
            "name": "_hjFirstSeen",
            "value": "1"
        },
        {
            "name": "_fbp",
            "value": "fb.1.1675728022180.276484547"
        },
        {
            "name": "arrowcurrency",
            "value": "isocode=KRW&culture=ko-KR"
        },
        {
            "name": "_br_uid_2",
            "value": "uid%3D7910666921474%3Av%3D13.0%3Ats%3D1675728018514%3Ahc%3D1"
        },
        {
            "name": "ak_bmsc",
            "value": "96E3B995BFBEA3C3D3D85C19C2272411~000000000000000000000000000000~YAAQhePfrYn28s6FAQAAy14sKRIYy0W9BzvFrntik/p4SMidPFPxHfkSZjJ9Z0lK4ZHnAx7CBl8NjP7x4sXdzY0Sg9wuulRKfK7sC9bkxgTsuTxg7egQGaa8AgWXB7ffz5rkw1kwcz0kUu31bsNcFU6iK1Ew/i7Wy+dXJ6iezwWAieswo7An2Io3UtiCC1ADWeBo0AyB5fB46rSRZhFzzS6vVqzAhi/1WY8E+lrpe8PXtF+td0MRFskasd+8OQe5KpxHAo8AvMqtsjyN3rPAxeb98QL9cwlcHnbMhw6bkjTJCVYL/MnSwGtBYmC9fLGDE/b8iBPCzqOYT+z+cWyumRL8f3yZ0/XRpcLAjoUxYwVbeGXSIZBJJT69fb98OHdCTZp5A5I8B9Ey/wYqlO775Xsc3k+V3eCUAEgFftvEL2dj3BQQp8UoibtcskBBVfcF36afiXDsHmDfyDQyp0ck7jdCDQ2wKxs8o0D9Vnc6sLVo7gjuJia2dyEd"
        },
        {
            "name": "_ga",
            "value": "GA1.2.634595883.1675728021"
        },
        {
            "name": "gaVisitorType",
            "value": "new"
        },
        {
            "name": "RedirectFromLogin",
            "value": "0"
        },
        {
            "name": "pageviewCount",
            "value": "1"
        },
        {
            "name": "pageviewCount",
            "value": "oeu1675728016342r0.09642147702172488"
        },
        {
            "name": "_abck",
            "value": "47B9D89511509857A8BB73296630B807~0~YAAQhePfrZz28s6FAQAAv18sKQkw6VGvYYnwdwV2AxCIm4aQoYfSc6ZLOg7m+pDzAlu9YJ6ExpwtNYVy3ZyBuAqajy/7/8dn6W05LekolWz2OxOXmnH1OBcqbBYMV6bwsHs94ZGir9SWc13upAF/63HRPkunGMcnB1A30h+t8rEJN/JrqnrymxCjuTfsTjqxgfQNFQRwh36Hd2NVrQOYPPJcuTVl2cQrgDQ9E1E7ZPWa+99FKMiDNlxiBB9KAQ5EznPWy43QKFpm3lox2H89qFFGsz0S3cpnPcOjDS/PzJlYKxy/0SD9zIFtz4HXCURLyTVLJjMI57j6BVSK+XCp6IcLPNhSgNIUNzM1WBawgAlHxX6i8Bu/UWdAVzbM4xxh2FRDoThQPvCno4tGHSTiS7c/n3Jwggc=~-1~-1~-1"
        },
        {
            "name": "website#lang",
            "value": "en"
        },
        {
            "name": "_hjSessionUser_1995675",
            "value": "eyJpZCI6IjgwZjcxOWNkLTk4YzUtNWQwMi1iMWZjLTQ1Yzk5MTQwMTZiYyIsImNyZWF0ZWQiOjE2NzU3MjgwMjMyNzksImV4aXN0aW5nIjpmYWxzZX0="
        },
        {
            "name": "IsNewUser",
            "value": "False"
        }
    
    
    
    ]


    //page.on("load", e =>{} );
    //page.waitForSelector 최대 대기시간
    //page.setDefaultTimeout(15000)
    await page.goto(`https://www.arrow.com/`,{ waitUntil: "domcontentloaded"})
    // const getCookie = await page.cookies();
    // const cookiee = JSON.stringify(getCookie);
    // console.log(cookiee);
   
    //await page.setCookie(...cookie);
    await page.goto(`https://www.arrow.com/en/products/search?cate=&r=true&q=${param}`,{ "waitUntil": "domcontentloaded"})
    await page.screenshot({path:"./screenshot.png"})
    await page.evaluate((partnumber) => {
        document.querySelector("input[name='q']").value = partnumber
    }, [param])

    await page.click(".Embedded-search-button")

    const result = await page.evaluate((partnumber) => {
        if(document.querySelector(".SearchResults-results .SearchResults-resultRow")){
           return {res : "ok"}
        }

        if(document.querySelector(".Product-Summary")){
            return {res : "nope"}
        }

        return {res: "yepp"}

    }, [param])

    // await page.close()
    // await browser.close()
    }catch(err){
        console.log(err);
    }
    return result

}

export default init;