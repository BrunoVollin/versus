import puppeteer from 'puppeteer';

type locationType = 'Estados Unidos' | 'Brasil' | string;
type TechnologyType = 'React Native' | 'Flutter' | string

export default class Jobs {
  page!: puppeteer.Page;

  browser!: puppeteer.Browser;
  delay = 3700;

  async createPage() {
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--window-size=1920,1080'],
    });
    this.page = await this.browser.newPage();
  }

  async login() {
    if (this.page) {
      await this.page.goto('https://www.linkedin.com/login?emailAddress=&fromSignIn=&fromSignIn=true&session_redirect=https%3A%2F%2Fbr.linkedin.com%2Fjobs%2Fsearch%3Fkeywords%3DLinkedin%26location%3DBrasil%26geoId%3D%26trk%3Dpublic_jobs_jobs-search-bar_search-submit%26position%3D1%26pageNum%3D0&trk=public_jobs_nav-header-signin');
      await this.page.type('#username', 'bruno.3av@gmail.com');
      await this.page.type('#password', 'bruno4977');
      await this.page.click('.btn__primary--large');
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((r) => setTimeout(r, this.delay));
    } else {
      console.log('Page not created');
    }
  }

  async getJobsLinkedin(technology: TechnologyType, location: locationType) {
    if (this.page) {
      const element1: any = ((await this.page.$x('/html/body/div[6]/header/div/div/div/div[2]/div[1]/div/div/input[1]'))[0]);
      await element1.click({ clickCount: 3 });
      await element1.press('Backspace');
      await element1.type(technology);

      const element2: any = ((await this.page.$x('/html/body/div[6]/header/div/div/div/div[2]/div[2]/div/div/input[1]'))[0]);
      await element2.click({ clickCount: 3 });
      await element2.press('Backspace');
      await element2.type(location);

      const button: any = ((await this.page.$x('/html/body/div[6]/header/div/div/div/div[2]/button[1]'))[0]);
      await button.click();
      await new Promise((r) => setTimeout(r, this.delay));

      const text: any = ((await this.page.$x('/html/body/div[6]/div[4]/div[4]/div/div/main/div/section[1]/header/div[1]/small'))[0]);
      console.log(text);
      const result = await text.evaluate((el: any) => el.textContent);
      const arr = result.split(' ').filter((item: any) => item !== '');
      const firstItem = arr[1].replace('.', '');
      const res = parseInt(firstItem, 10);

      return res;
    }
    console.log('Page not created');
    return 0;
  }

  async closeBrowser() {
    await this.browser?.close();
  }
}
