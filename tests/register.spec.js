// @ts-check
const { test, expect } = require('@playwright/test');
// @ts-check
const { faker } = require('@faker-js/faker');
const { registerUser, createAccount } = require('../Parabank/functions/account.function');

test.beforeEach(async ({ page }) => {
  //given  
  await page.goto('/parabank/register.htm'); 
  const credential ={userName: faker.internet.userName(), password: faker.internet.password()
  };

  //When
  await registerUser(page,credential);

  //then
  await expect(page.getByText('Your account was created')).toBeVisible();

});

  test('Create a new account', async ({ page }) => {
 //given  
  await page.goto('/parabank/openaccount.htm'); 
  
  //when  
  const accountNumber = await createAccount(page,'CHECKINGS');
  
   //then
   expect(accountNumber).not.toBeUndefined();
   expect(accountNumber).not.toBe('');
   

});
