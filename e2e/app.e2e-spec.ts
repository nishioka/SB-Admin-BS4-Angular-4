import { SbAdminCliUpdatePage } from './app.po';
import { browser, element, by } from 'protractor';

describe('sb-admin-cli-update App', () => {
  let page: SbAdminCliUpdatePage;

  beforeEach(() => {
    page = new SbAdminCliUpdatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });

  it('should display message saying App works !', () => {
    expect(element(by.css('app-home h1')).getText()).toMatch('App works !');
  });
});
