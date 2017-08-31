import { Ngtranslate2Page } from './app.po';

describe('ngtranslate2 App', () => {
  let page: Ngtranslate2Page;

  beforeEach(() => {
    page = new Ngtranslate2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
