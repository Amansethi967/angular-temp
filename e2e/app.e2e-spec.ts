import { BwmCliPage } from './app.po';

describe('bwm-cli App', function() {
  let page: BwmCliPage;

  beforeEach(() => {
    page = new BwmCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
