'use strict';

import chai from 'chai';

let expect = chai.expect;

describe('Git Test', () => {

    it("Go to repository", (done) => {
        browser
            .url('/fernandosqa');

        var title = browser.getTitle();
        expect(title).to.contain("GitHub");

        browser.click("=Repositories");

        var text = browser.getText("body");
        expect(text).to.contain("Fernando");

        browser
            .saveScreenshot('../test/reports/snapshot.png')
            .call(done);
    });

});
