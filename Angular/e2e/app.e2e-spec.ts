import { CMSTemplatePage } from './app.po';

describe('CMS App', function() {
  let page: CMSTemplatePage;

  beforeEach(() => {
    page = new CMSTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
