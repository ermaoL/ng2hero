import { Ng2heroPage } from './app.po';

describe('ng2hero App', function() {
  let page: Ng2heroPage;

  beforeEach(() => {
    page = new Ng2heroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
