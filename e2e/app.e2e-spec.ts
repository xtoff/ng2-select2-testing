import { JasmineTestProjectPage } from './app.po';

describe('jasmine-test-project App', function() {
  let page: JasmineTestProjectPage;

  beforeEach(() => {
    page = new JasmineTestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
