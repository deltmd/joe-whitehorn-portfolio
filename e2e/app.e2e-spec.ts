import { JoeWhitehornPortfolioPage } from './app.po';

describe('joe-whitehorn-portfolio App', () => {
  let page: JoeWhitehornPortfolioPage;

  beforeEach(() => {
    page = new JoeWhitehornPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
