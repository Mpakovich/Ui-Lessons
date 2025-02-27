import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/en";

test.describe("FE delivery app login page testing", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.APP_URL as string);
  });

  test("TC-16-1 Login button remains disabled when only username is provided and password field is blank", async ({
    page,
  }) => {
    const usernameInput = page.locator("#username");
    const loginButton = page.locator('[data-name="signIn-button"]');

    await usernameInput.fill(faker.string.alpha(3));
    await expect(loginButton).toBeDisabled();
  });

  test("TC-16-2 Login button remains disabled when only password is provided and username field is blank", async ({
    page,
  }) => {
    const passwordInput = page.locator("#password");
    const loginButton = page.locator('[data-name="signIn-button"]');

    await passwordInput.fill(faker.internet.password(10));
    await expect(loginButton).toBeDisabled();
  });

  test("TC-16-3 Error message appears when username contains less than required characters", async ({
    page,
  }) => {
    const usernameInput = page.locator("#username");
    const loginButton = page.locator('[data-name="signIn-button"]');
    const usernameError = page.locator(".form-error_active[data-name='username-input-error']",
    );

    await usernameInput.fill(faker.string.alpha(1));
    await expect(loginButton).toBeDisabled();
    await expect(usernameError).toBeVisible();
  });

  test("TC-16-4 Unsuccessful login attempt with incorrect credentials shows an error message", async ({
    page,
  }) => {
    const usernameInput = page.locator("#username");
    const passwordInput = page.locator("#password");
    const loginButton = page.locator('[data-name="signIn-button"]');
    const authErrorPopup = page.locator('[data-name="authorizationError-popup"]',
    );

    await usernameInput.fill(faker.internet.username());
    await passwordInput.fill(faker.internet.password(12));
    await expect(loginButton).toBeEnabled();
    await loginButton.click();
    await expect(authErrorPopup).toBeVisible();
  });
});
