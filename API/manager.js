var XLSX = require('xlsx');
var argv = require('minimist')(process.argv.slice(2));

export default class Manager {
    constructor(page) {
        this.tokenUrl = argv.tokenUrl === undefined ? '/*API ENDPOINT*/' : argv.tokenUrl + '/connect/token';
        this.apiUrl = argv.apiUrl === undefined ? '/*API ENDPOINT*/' : argv.apiUrl;
        this.facadeUrl = argv.facadeUrl === undefined ? '/*API ENDPOINT*/' : argv.facadeUrl;
        this.iboUrl = argv.iboUrl === undefined ? '/*API ENDPOINT*/' : argv.iboUrl;
        this.ucetniJednotkaUrl = this.apiUrl + '/api/StrukturaUcetniJednotky/UcetniJednotka';
        this.registraceDphUrl = this.apiUrl + '/api/StrukturaUcetniJednotky/UcetniJednotka/Dph';
        this.ucetniObdobiUrl = this.apiUrl + '/api/UcetniDenik/UcetniObdobi';
        this.dokladovaRadaUrl = this.apiUrl + '/api/UcetniDenik/DokladovaRada';
        this.dokladUrl = this.apiUrl + '/api/UcetniDenik/Doklad';
        this.ucetniDenikUrl = this.apiUrl + '/api/UcetniDenik/UcetniDenik';
        this.ucetUrl = this.apiUrl + '/api/UctovyRozvrh/Ucet';
        this.hlavniKnihaUrl = this.apiUrl + '/api/HlavniKniha/VypocetHlavniKnihy';
        this.ucetniDimenzeUrl = this.apiUrl + '/api/UcetniDimenze/PouzitiUcetniDimenze';
        this.hodnotaUcetniDimenzeUrl = this.apiUrl + '/api/UcetniDimenze/HodnotaUcetniDimenze';
        this.facadeDokladUrl = this.facadeUrl + '/api/CroseusFacade/CroDoklad';
        this.facadePouzitiDimenzeUrl = this.facadeUrl + '/api/CroseusFacade/CroPouzitiDimenze';

        this.authBody = {
            'client_id': process.env.client_id,
            'client_secret': process.env.client_secret,
            'grant_type': process.env.grant_type,
            'response_type': process.env.response_type,
            'audience': process.env.audience
        };
        this.tokenHeader = null;
        this.loadData(page);
        this.testObjects.forEach(objekt => {
            for (var key in objekt) {
                if (objekt.hasOwnProperty(key)) {
                    if (objekt[key] == null)
                        delete objekt[key];
                }
            }
            delete objekt.case;
            delete objekt.vysledek;
            delete objekt.index;
            delete objekt.kontrola;
        })

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 2).padStart(2, '0');
        let yy = String(today.getFullYear() - 2).slice(2);
        this.code = yy + mm + dd;
        this.HKPrefix = 'H1'
        this.prefix = '18'
        this.kodUj = this.prefix + this.code
    }

    loadData(page) {
        this.workbook = XLSX.readFile('tc-data-cfi-suj.xlsx');
        this.sheet_name_list = this.workbook.SheetNames;
        this.testObjects = XLSX.utils.sheet_to_json(this.workbook.Sheets[this.sheet_name_list[page]]);
        this.testObjects.forEach(objekt => {
            for (var key in objekt) {
                if (objekt.hasOwnProperty(key)) {
                    if (objekt[key] == 'null')
                        delete objekt[key];
                }
            }
        })
    }

    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
}