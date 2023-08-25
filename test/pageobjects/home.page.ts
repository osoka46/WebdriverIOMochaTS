import { $ } from '@wdio/globals'
import basePage from './page.js';
import locaters from "../data/locators.json" assert {type: "json"};


class HomePage extends basePage {
    private get agreeAllCookieButton() { return $(locaters.homePage.cookie.agreeAllCookieButton); }
    private get inputPlaceHolder() { return $(locaters.homePage.searchFunction.inputPlaceHolder); }
    private get resultListName() { return $$(locaters.homePage.searchFunction.resultListName); }
    private get resultListCity() { return $$(locaters.homePage.searchFunction.resultListCity); }

    //direcltyClick is only for temporary solution
    get direcltyClickLocator() { return $("div[class='search-cards'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2)") }


    //temporary solution to navigate testing page
    async getPyhsicianPageDirectly(inputText: string) {
        await this.inputPlaceHolder.setValue(inputText);
        await this.direcltyClickLocator.click()
    }


    async seachFunction(inputText: string, city?: string) {
        //to type name into placeholder and clicking accordingly name and city
        await this.inputPlaceHolder.setValue(inputText);
        const elementsListName = await this.resultListName;
        const elementsListCity = await this.resultListCity;
        if (typeof city !== 'undefined') {
            for (let temp = 0; temp < await elementsListName.length; temp++) {
                const resultNameText = await elementsListName[temp].getText();
                const resultCityText = await elementsListCity[temp].getText();
                if (resultNameText === inputText && resultCityText === city) {
                    await elementsListName[temp].click();
                    break;
                }
            }
        }else{
            //......
        }
    }
    async agreeAllCookie() {
        await this.agreeAllCookieButton.click();
    }
}

export default new HomePage();
