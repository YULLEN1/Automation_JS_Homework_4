let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});



describe("Github page tests", () => {
     beforeEach(async () => {
       await page.goto("https://github.com/team");
     });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    const expected = "GitHub: Where the world builds software · GitHub";
    expect(title2).toEqual(expected);
  }, 5000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    const expected = "#start-of-content";
    expect(actual).toEqual(expected);
  }, 5000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    const expected = "Sign up for free";
    expect(actual).toContain(expected)
  }, 5000);
});

 test("The h1 header on /features'", async () => {
   await page.goto("https://github.com/features");
   const title = ".h1-mktg.col-7-max.mx-auto";
   const actual = await page.$eval(title, (link) => link.textContent);
   const expected = "The tools you need to build what you want.";
   expect(actual).toContain(expected);
 }, 5000);

  test("The page /actions contains button", async () => {
    await page.goto("https://github.com/features/actions")
    const btnSelector = ".btn-mktg.btn-large-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    const expected = "Get started with Actions";
    expect(actual).toContain(expected);
  }, 5000);

  test("The title on /enterprise", async () => {
    await page.goto("https://github.com/enterprise");
    const title3 = ".Primer_Brand__SubNav-module__SubNav__heading___MAxf6";
    const actual = await page.$eval(title3, (link) => link.textContent);
    const expected = "Enterprise";
    expect(actual).toContain("Enterprise");
  }, 10000);



