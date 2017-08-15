import { AngularTestingAppPage } from './app.po';

describe('angular-testing-app App', () => {
  let page: AngularTestingAppPage;

  beforeEach(() => {
    page = new AngularTestingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
