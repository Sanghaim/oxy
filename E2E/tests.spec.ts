import { Selector} from 'testcafe';

import Search from './searchPage.model';
import Basket from './basketPage.model';


fixture`Objednavka u dodavatele`
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .setNativeDialogHandler(() => true);
        await Search.goToHomePage();
    });

const searchedItemName = 'SteelSeries Apex 3';
const itemToBeBuyed = 'SteelSeries Apex 7, QX2 Brown, US'


test('Search of existitng item', async t => {
    await Search.lookUpItem(searchedItemName)
    await t
        .expect(Search.itemTileSelector.withText(searchedItemName).visible).ok(searchedItemName + ' should be visible on the page.')
        .expect(Search.itemTileSelector.withText(searchedItemName).find('div.tile-controls').find('span.control').nth(1).innerText)
        .contains('Nedostupné', 'Item should be out of stock')
        .expect(Search.itemTileSelector.withText(searchedItemName).find('button').withAttribute('data-long-term-unavailable', 'true').visible)
        .ok('Notification button should be visible')
        .click(Search.itemTileSelector.withText(searchedItemName).find('button'))
        .expect(Selector('div.popup-content').visible).ok('Modal with sign in and sign up options should be visible');
});

test('Search of non-existing item', async t => {
    await Search.lookUpItem('gibberish');
    await t
        .expect(Selector('#product-list-container > div.message').hasClass('message--info')).ok('Message should have "message--info" class.')
        .expect(Selector('#product-list-container > div.message').innerText)
        .contains('Je nám líto, ale Vašemu požadavku neodpovídá žádný záznam.', 'Incorrect text of message');
})

test('Add item into basket, go through buy process', async t => {
    await Search.lookUpItem(itemToBeBuyed)
    await t.expect(Search.itemTileSelector.withText(itemToBeBuyed).visible).ok(itemToBeBuyed + ' should be visible on the page.');
    await Basket.addItemIntoBasket(itemToBeBuyed);
    await t
        .expect(Basket.addedItemOverviewSelector.withText(itemToBeBuyed).visible).ok('Overview of added item should be visible')
        .click(Basket.continueInShoppingButton)
        .expect(Basket.itemTileSelector.withText(itemToBeBuyed).find('button').hasClass('in-basket')).ok('Item in basket should be marked with "V košíku" button.');
    await Basket.openBasket();
    await t
        .expect(Selector('h1').withText('Váš nákupní košík').visible).ok('The basket overview should be visible')
        .expect(Basket.basketTableSelector.visible).ok('The basket table should be visible')
        .expect(Basket.productNameSelector.innerText).contains(itemToBeBuyed, itemToBeBuyed + ' should be in basket table')
        .expect(Basket.basketControlsSelector.find('button.btn-primary').visible).ok('Button to continue in buying process should be visible')
        .click(Basket.basketControlsSelector.find('button.btn-primary'))
        .click(Basket.basketControlsSelector.find('button.btn-primary'))
        .expect(Basket.deliveryAndPaymentFormSelector.visible).ok('Form for delivery and payment should be visible')
        .expect(Basket.doRukyInput.hasAttribute('checked'))
        .ok('Delivery option "Doručení domů s možností bezkontaktního předání" should be selected by default')
        .expect(Selector('#frm-payment-1').hasAttribute('checked'))
        .ok('Payment by card should be selected by default')
        .click(Basket.osobniOdberLabel)
        .expect(Basket.pickUpPointsSelector.visible).ok('Modal with pick up points should be visible')
        .click(Basket.popUpCloseButton)
        .expect(Basket.doRukyInput.hasAttribute('checked'))
        .ok('Delivery option "Doručení domů s možností bezkontaktního předání" should be selected after closing "Osobní odběr" modal.')
        .click(Basket.deliveryAndPaymentFormSelector.find('button.btn-primary'));
    await Basket.fillDeliveryInformation();
    await t
        .expect(Basket.countrySelect.innerText).contains('Česká republika', 'Option "Česká republika" should be selected by default')
        .click(Selector('button.btn-primary'))
        .expect(Basket.basketTableSelector.visible).ok('Basket table should be visible on order summary')
        .expect(Basket.productNameSelector.innerText).contains(itemToBeBuyed, itemToBeBuyed + ' should be in order summary')
        .expect(Basket.finalPriceParagraph.innerText).match(/4.*977.*Kč/) // Regex byl zvolen z duvodu neviditelnych znaku, ktere se nachazeji v HTML
        .expect(Basket.basketControlsSelector.find('button.btn-primary').hasAttribute('disable')).notOk('Confirm order should not be disabled');
})