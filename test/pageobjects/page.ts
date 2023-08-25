import { browser } from '@wdio/globals'
import orData from "../data/or.json" assert {type:"json"};


export default class Page {

    public openUrl (path?: string) {
        return browser.url(orData.Url.homePage+path);
    }
   
    public async maximizeWindow()
    {
        await browser.maximizeWindow();
    }
}
