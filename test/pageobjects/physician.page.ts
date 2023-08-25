import locaters from "../data/locators.json" assert {type: "json"};
import basePage from "./page.ts";

class PhysicianPage extends basePage{
     get imageContent() { return $(locaters.physicianSearchPage.imageContent); }
     get physicianName() { return $(locaters.physicianSearchPage.docName); }
     get physicianAddress() { return $(locaters.physicianSearchPage.docAddress); }
     get currentWorkingDay() { return $(locaters.physicianSearchPage.currentWorkingDay); }
     get currentWorkingHours() { return $(locaters.physicianSearchPage.currentWorkingHours); }


 
}
export default new PhysicianPage();