import { ShopzaPage } from './app.po';

describe('shopza App', () => {
  let page: ShopzaPage;

  beforeEach(() => {
    page = new ShopzaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
