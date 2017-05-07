import { FilmProjectPage } from './app.po';

describe('film-project App', () => {
  let page: FilmProjectPage;

  beforeEach(() => {
    page = new FilmProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
