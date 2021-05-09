import Manager from "./manager";
var chakram = require('chakram'),
    expect = chakram.expect;
import UcetniObdobiSchema from "./ucetniObdobi.schema";

let testManager = new Manager(2);
testManager.testObjects.forEach(objekt => {
    objekt.od = objekt.od != null ? objekt.od = new Date(objekt.od) : null;
    objekt.do = objekt.do != null ? objekt.do = new Date(objekt.do) : null;
    objekt.kvartaly = objekt.kvartaly ? JSON.parse(objekt.kvartaly) : null;
    objekt.mesice = objekt.mesice ? JSON.parse(objekt.mesice) : null;
    if (objekt.kod) {
        objekt.kod = objekt.kod.toString()
    }
    if (objekt.kodUj) {
        objekt.kodUj = objekt.kodUj.toString()
    }
    if (objekt.kodS) {
        objekt.kodS = objekt.kodS.toString()
    }
})

describe('Ucetni obdobi', function() {
    before('Get API token', function() {
        let token = chakram.post(testManager.tokenUrl, null, { 'form': testManager.authBody })
        expect(token).to.have.status(200);
        return chakram.all(token).then(function(response) {
            token = response.body.access_token;
            testManager.tokenHeader = { headers: { Authorization: 'Bearer ' + token } }
        });
    });

    describe('Testy', function() {
        before('Cisteni ucetnich obdobi', function() {
            var multipleResponses = [];
            for (var i = 0; i < testManager.testObjects.length; i++) {
                multipleResponses.push(chakram.delete(testManager.ucetniObdobiUrl + `?kodUj=${testManager.testObjects[i].kodUj}&kodUo=${encodeURIComponent(testManager.testObjects[i].kod)}`,
                    null, testManager.tokenHeader));
                testManager.sleep(1000);
            }
            return chakram.all(multipleResponses).then(function() {});
        })

        describe('TC-CFI-UD-001 Založení účetního období', function() {
            var response
            it('Zaslani pozadavku, kontrola status kodu (200)', function() {
                response = chakram.post(testManager.ucetniObdobiUrl + `?kodUj=${testManager.testObjects[0].kodUj}`, testManager.testObjects[0], testManager.tokenHeader)
                expect(response).to.have.status(200);
                return chakram.wait();
            })

            it('Response by mel odpovidat JSON schematu', function() {
                return expect(response).to.have.schema(UcetniObdobiSchema.ucetniObdobiPost());
            })

            it('Response by mel obsahovat data vytvoreneho obdobi', function() {
                expect(response).to.have.json('kodUj', testManager.testObjects[0].kodUj.toString());
                expect(response).to.have.json('kod', testManager.testObjects[0].kod.toString());
                expect(response).to.have.json('kodS', testManager.testObjects[0].kodS.toString());
                expect(response).to.have.json('popis', testManager.testObjects[0].popis)
                expect(response).to.have.json('od', function(datum) {
                    expect(new Date(datum).toISOString()).to.equal(testManager.testObjects[0].od.toISOString());
                });
                expect(response).to.have.json('do', function(datum) {
                    expect(new Date(datum).toISOString()).to.equal(testManager.testObjects[0].do.toISOString());
                });
                return chakram.wait();
            })

            it('Response by mel obsahovat data 12 mesicu', function() {
                return expect(response).to.have.json('ucetniObdobiMesice', function(mesice) {
                    return expect(mesice).to.have.length(12);
                })
            })

            it('Response by mel obsahovat data 4 kvartalu', function() {
                return expect(response).to.have.json('ucetniObdobiKvartaly', function(kvartaly) {
                    return expect(kvartaly).to.have.length(4);
                })
            })

            it(`Response by mel obsahovat informaci o tom, jestli je obdobi uzamcene (${testManager.testObjects[0].vykazyUzavreny})`, function() {
                return expect(response).to.have.json('vykazyUzavreny', testManager.testObjects[0].vykazyUzavreny == 'true');
            })
        })
    })
})