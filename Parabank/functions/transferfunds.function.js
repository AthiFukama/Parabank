// const { expect } = require('@playwright/test');
// import {pause} from './global.function'
// const { faker } = require('@faker-js/faker');


// /**
//  * Transfers funds between accounts.
//  * @param {import('playwright').Page} page
//  * @param {string} fromAccountId
//  * @param {string} toAccountId
//  * @param {string} amount
//  */
// export async function transferFunds(page, fromAccountId, toAccountId, amount) {
//   await page.goto('/parabank/transfer.htm');
//   await page.locator('[name="fromAccountId"]').selectOption(fromAccountId);
//   await page.locator('[name="toAccountId"]').selectOption(toAccountId);
//   await page.locator('[name="amount"]').fill(amount);
//   await page.getByRole('button', { name: 'Transfer' }).click();
//   await expect(page.getByText('Transfer Complete!')).toBeVisible();
// }