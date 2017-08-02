describe('Home View Testing', () => {
    let HOME_PATH = '/';

    beforeEach(async () => {
        await browser.get(HOME_PATH);
    });

    it('Should have Lead Title', () => {
        let leadTitleElement = element(by.css('.lead-title'));
        expect(leadTitleElement.isPresent()).toBe(true);
    });

    it('Should have Lead Title Content', () => {
        let leadTitleElement = element(by.css('.lead-title'));
        
        leadTitleElement.getText().then(
            (actualValue) => {
                let expectedValue = 'AWESOME, CUSTOMIZABLE, FREE';
                expect(actualValue).toBe(expectedValue);
            });
    });

    afterEach(() => console.log('Test Completd!'));
});