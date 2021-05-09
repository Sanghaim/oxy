import {Selector, t} from 'testcafe';

import BasePage from './basePage.model';

export default class Page extends BasePage{
    static addedItemOverviewSelector = Selector('#buy-mode-product');
    static continueInShoppingButton = Selector('button.close');
    static basketPreviewButton = Selector('#basket-preview');
    static basketTableSelector = Selector('#basket-table');
    static basketControlsSelector = Selector('div.basket-controls');
    static productNameSelector = Selector('div.product-name');
    static pickUpPointsSelector = Selector('#popup-pick-up-points');
    static deliveryAndPaymentFormSelector = Selector('form[name=basket-delivery-and-payment-form]');
    static osobniOdberLabel = Selector('label[for=frm-transport-1]');
    static doRukyInput = Selector('#frm-transport-5');
    static deliveryFormIdPrefix = '#frm-registration\\.';
    static emailInput = Selector(Page.deliveryFormIdPrefix + 'email');
    static phoneInput = Selector(Page.deliveryFormIdPrefix + 'phoneNumberFormatted');
    static nameInput = Selector(Page.deliveryFormIdPrefix + 'name');
    static surnameInput = Selector(Page.deliveryFormIdPrefix + 'surname');
    static streetInput = Selector(Page.deliveryFormIdPrefix + 'street');
    static cityInput = Selector(Page.deliveryFormIdPrefix + 'city');
    static zipCodeInput = Selector(Page.deliveryFormIdPrefix + 'zipCodeFormatted');
    static countrySelect = Selector(Page.deliveryFormIdPrefix + 'countryId');
    static finalPriceParagraph = Selector('p.total-price');

    static async addItemIntoBasket(itemName: string){
        await t.click(this.itemTileSelector.withText(itemName).find('button.btn-buy'));
    }

    static async openBasket(){
        await t
            .hover(this.basketPreviewButton)
            .click(Selector('a').withText('Objednat zboží'));
    }

    static async fillDeliveryInformation() {
        await t
            .typeText(this.emailInput, 'example@mail.com')
            .typeText(this.phoneInput, '602 456 789')
            .typeText(this.nameInput, 'John')
            .typeText(this.surnameInput, 'Doe')
            .typeText(this.streetInput, 'NoWhere 42')
            .typeText(this.cityInput, 'Anywhere')
            .typeText(this.zipCodeInput, '666 42')
    }
}