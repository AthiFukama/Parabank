const { faker } = require('@faker-js/faker');
export async function registerUser(page,credential){

    // await page.getByRole('link', { name: 'Register' }).click();
    await page.locator('[id="customer\\.firstName"]').click();
    await page.locator('[id="customer\\.firstName"]').fill(faker.person.firstName());
    await page.locator('[id="customer\\.lastName"]').click();
    await page.locator('[id="customer\\.lastName"]').fill(faker.person.lastName());
    await page.locator('[id="customer\\.address\\.street"]').click();
    await page.locator('[id="customer\\.address\\.street"]').fill(faker.location.streetAddress());
    await page.locator('[id="customer\\.address\\.city"]').click();
    await page.locator('[id="customer\\.address\\.city"]').fill(faker.location.city());
    await page.locator('[id="customer\\.address\\.state"]').click();
    await page.locator('[id="customer\\.address\\.state"]').fill(faker.location.state());
  //   await page.getByRole('row', { name: 'Zip Code:' }).getByRole('cell').nth(1).click();
    await page.locator('[id="customer\\.address\\.zipCode"]').fill(faker.location.zipCode());
  //   await page.getByRole('row', { name: 'Phone #:' }).getByRole('cell').nth(1).click();
    await page.locator('[id="customer\\.phoneNumber"]').fill(faker.string.numeric(10));
    await page.locator('[id="customer\\.ssn"]').click();
    await page.locator('[id="customer\\.ssn"]').fill(faker.string.numeric(10));
    await page.locator('[id="customer\\.username"]').click();
    await page.locator('[id="customer\\.username"]').fill(credential.userName); //Athi
    await page.locator('[id="customer\\.password"]').click();
    await page.locator('[id="customer\\.password"]').fill(credential.password);
    await page.locator('#repeatedPassword').click();
    await page.locator('#repeatedPassword').fill(credential.password);
    await page.getByRole('button', { name: 'Register' }).click();
  
}