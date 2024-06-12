// @ts-check
const { test, expect } = require('@playwright/test');
// @ts-check
const { faker } = require('@faker-js/faker');
const { registerUser } = require('../Parabank-main/functions/accountfunction');

test.beforeEach(async ({ page }) => {
  //given  
  await page.goto('/parabank/register.htm'); 
  const credential ={username:faker.internet.userName(), password:faker.internet.password()};
  
  //when  
  await registerUser(page, credential);

   //then
  await expect(page.getByText('Your account was created')).toBeVisible();

});

async function pause(milliseconds){
  return new Promise(resolve => setInterval(resolve, milliseconds));
}

test('Create  a  new account',async ({ page }) => {
    //given  
    await page.goto('/parabank/register.htm'); 
    await page.getByTestId('type').selectOption('CHECKING');
    let options = await page.getByTestId('fromAccountId').locator('option').allTextContents();

    while (options.length === 0){
      await pause(500);
      await page.getByTestId('fromAccountId').locator('option').allTextContents();
    }

    expect(options.length).toBeGreaterThan(0);

    await page.getByTestId('fromAccountId').selectOption(options[0]);
    await page.getByRole('button', {name: 'Open New Account'}).click();
    await expect(page.getByText('Your new account number')).toBeVisible();

    const accountNumber = await page.getByTestId('newAccountId').textContent();
    expect(accountNumber).not.toBeDefined();
    expect(accountNumber).not.toBe('');
    
    // const t = "";
  
  });
  