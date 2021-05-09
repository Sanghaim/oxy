import {Selector, ClientFunction, t} from 'testcafe';

export default class Page {
    static baseUrl = 'https://www.czc.cz/';
    static itemTileSelector = Selector('div.new-tile');
    static popUpCloseButton = Selector('button.popup-close');

    static async goToHomePage(){
        await t.navigateTo(this.baseUrl);
    }

    static async clickItem(itemName: string){
        await t.click(this.itemTileSelector.withText(itemName));
    }
}