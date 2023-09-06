import { $ } from '@wdio/globals'
import basePage from './page.js';
import locaters from "../data/locators.json" assert {type: "json"};
import physicianValue from "../data/physicianValue.json" assert {type: "json"};


class HomePage extends basePage {
    private get agreeAllCookieButton() { return $(locaters.homePage.cookie.agreeAllCookieButton); }
    private get inputPlaceHolder() { return $(locaters.homePage.searchFunction.inputPlaceHolder); }
    private get resultListNameCity() { return $$(locaters.homePage.searchFunction.resultListNameCity); }



    async seachFunction(inputText: string, city?: string) {
        //to type name into placeholder and clicking accordingly name and city
        await this.inputPlaceHolder.setValue(inputText);
        await browser.pause(5000)
        await this.resultListNameCity.forEach(async temp => {
            if (await temp.getText() === physicianValue.expectedValue.nameCity) {
                temp.click()
            }
        })
    }

    async agreeAllCookie() {
        await this.agreeAllCookieButton.click();
        await browser.pause(2000)
    }
}

export default new HomePage();
