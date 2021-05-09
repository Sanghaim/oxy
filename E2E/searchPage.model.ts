import {Selector, t} from 'testcafe';

import BasePage from './basePage.model';

export default class Page extends BasePage{
    static searchBarInput = Selector('#fulltext');
    static searchButton = Selector('button.fulltext__btn');

    static async lookUpItem(item: string) {
        await t
            .typeText(this.searchBarInput, item)
            .click(this.searchButton);
    }
}