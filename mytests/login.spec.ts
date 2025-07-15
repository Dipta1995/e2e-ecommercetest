import {test, expect, Browser, Page } from '@playwright/test';
import { LoginPage } from '../mypages/LoginPage';
import { chromium } from '@playwright/test';

test ('Login flow works', async ({page}) => {
    const browser:Browser = await chromium.launch({headless: false})
    const NewPage:Page = await browser.newPage();
    await page.goto("https://automationexercise.com/login");
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('kamrulhasandipta95@gmail.com' , 'p1255l');
    expect(login.isLoggedIn()).toBeTruthy();


    await page.screenshot({path : 'homepage.png'});

    
});