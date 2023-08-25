import physicianPage from "../pageobjects/physician.page.ts"
import homePage from "../pageobjects/home.page.ts"
import physicianValue from "../data/physicianValue.json" assert {type: "json"};



describe('Validation of physician view, name, address and working hours', async () => {
    before("open home page", async () => {
        homePage.openUrl();
        homePage.maximizeWindow();
        homePage.agreeAllCookie();
        /*normally i'd use following "seachFunction",more maintable and usefull, but i'm still new WebdriverIO and TS, somehow it did not work and 
        still working to find a solution. "getPyhsicianPageDirectly" is only for temporarly solution.*/

        //homePage.seachFunction(physicianValue.inputText.name,physicianValue.inputText.city);
        homePage.getPyhsicianPageDirectly(physicianValue.inputText.name);
    })

    it('physician view should display', async () => {
        await expect(physicianPage.imageContent).toBeDisplayed();
    })

    it('physician name should display  ', async () => {
        await expect(physicianPage.physicianName).toHaveText(physicianValue.expectedValue.name);
    })

    it('physician address should display', async () => {
        await expect(physicianPage.physicianAddress).toHaveText(physicianValue.expectedValue.address);
    })

    it('physician current working day start and end time should display ', async () => {
        const workingDayOnPage = await physicianPage.currentWorkingDay.getText();
        const workingHoursOnPage=await physicianPage.currentWorkingHours.getText();
        // there is only one half day, which is wednesday ==> index=0
        if (workingDayOnPage === physicianValue.expectedValue.workingDays.halfDays[0]) {
            await expect(workingHoursOnPage).toEqual(physicianValue.expectedValue.workingHours.halfDayTimes);
        } else {
            await expect(workingHoursOnPage).toEqual(physicianValue.expectedValue.workingHours.fullDayTimes);
        }
    })
})