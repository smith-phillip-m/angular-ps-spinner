import { AngularPsSpinnerPage } from './app.po';

describe('angular-ps-spinner App', () => {
  let page: AngularPsSpinnerPage;

  beforeEach(() => {
    page = new AngularPsSpinnerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
