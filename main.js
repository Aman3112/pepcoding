const puppeteer= require("puppeteer")
const webScrapper=require("./webScrapping")
let page;
let url;
const browserOpenPromise=puppeteer.launch({
    headless:false,
    slowMo:100,
    defaultViewport:null,
    args:["--start-maximized"]
});

browserOpenPromise.then((browser)=>
{
    // console.log("browser opened")
    const pagesArrPromise=browser.pages();
    return pagesArrPromise;
}).then((browserPages)=>
{
    page=browserPages[0];
    let gotoPromise=page.goto("https://www.wikipedia.org/")
    return gotoPromise;
}).then(()=>
{
    //english
    let elementWaitPromise=page.waitForSelector(".link-box strong",{visible:true})
    return elementWaitPromise
}).then(()=>
{
    let keysWillBeSendPromise=page.click(".link-box strong")
    return keysWillBeSendPromise;
}).then(()=>
{
    //all portals
    let elementWaitPromise=page.waitForSelector(".portal-hright.portal-vbot",{visible:true})
    return elementWaitPromise
}).then(()=>
{
    let keysWillBeSendPromise=page.click(".portal-hright.portal-vbot")
    return keysWillBeSendPromise;
}).then(()=>
{
    //a-z indexes
    let elementWaitPromise=page.waitForSelector(".hlist.noprint>ul>:last-child",{visible:true})
    return elementWaitPromise
}).then(()=>
{
    let keysWillBeSendPromise=page.click(".hlist.noprint>ul>:last-child")
    return keysWillBeSendPromise;
}).then(()=>
{
    //A
    let elementWaitPromise=page.waitForSelector("#toc tbody tr:nth-child(3)>td>b>a",{visible:true})
    return elementWaitPromise
}).then(()=>
{
    let keysWillBeSendPromise=page.click("#toc tbody tr:nth-child(3)>td>b>a")
    return keysWillBeSendPromise;
}).then(()=>
{
    //A
    let elementWaitPromise=page.waitForSelector(".mw-allpages-body .mw-allpages-chunk>li>a",{visible:true})
    return elementWaitPromise
}).then(()=>
{
    let keysWillBeSendPromise=page.click(".mw-allpages-body .mw-allpages-chunk>li>a")
    return keysWillBeSendPromise;
}).then(()=>
{
    //history
    let elementWaitPromise=page.waitForSelector(".toclevel-1.tocsection-1 a ",{visible:true})
    return elementWaitPromise
}).then(()=>
{
    let keysWillBeSendPromise=page.click(".toclevel-1.tocsection-1 a ")
    return keysWillBeSendPromise;
}).then(()=>
{
    //use in writing systems
    let elementWaitPromise=page.waitForSelector(".toclevel-1.tocsection-3 .toctext",{visible:true})
    return elementWaitPromise
}).then(()=>
{
    let keysWillBeSendPromise=page.click(".toclevel-1.tocsection-3 .toctext")
    return keysWillBeSendPromise;
}).then(()=>
{
    //other uses
    let elementWaitPromise=page.waitForSelector(".toclevel-1.tocsection-7 .toctext",{visible:true})
    return elementWaitPromise
}).then(()=>
{
    let keysWillBeSendPromise=page.click(".toclevel-1.tocsection-7 .toctext")
    return keysWillBeSendPromise;
}).then(()=>
{
    url=page.url()
    webScrapper(url)
}).catch((err)=>
{
    console.log(err)
})