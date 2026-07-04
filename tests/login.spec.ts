// spec: .ordino/stories/login.story.md
import { test } from '@config/page.config';

test.describe('DemoQA - Login', () => {

  // scenario: Create User And Login
  test('[AC-1] should create user and login to profile', async ({ loginPage }) => {
    await loginPage.step_create_user();
    await loginPage.step_navigate();
    await loginPage.step_login();
    await loginPage.verify_profile_username();
  });

  // scenario: Logout And Login Again
  test('[AC-2] should logout and login again', async ({ loginPage }) => {
    await loginPage.step_create_user();
    await loginPage.step_navigate();
    await loginPage.step_login();
    await loginPage.step_logout();
    await loginPage.step_navigate();
    await loginPage.step_login();
    await loginPage.verify_profile_username();
  });

  // scenario: Invalid Login
  test('[AC-3] should show error for invalid login', async ({ loginPage }) => {
    await loginPage.step_navigate();
    await loginPage.step_login_invalid();
    await loginPage.verify_login_error();
  });

  // scenario: Open Register Form
  test('[AC-4] should open register form from New User', async ({ loginPage }) => {
    await loginPage.step_navigate();
    await loginPage.step_open_register();
    await loginPage.verify_register_form();
  });

  // scenario: Back To Login
  test('[AC-5] should return to login from register', async ({ loginPage }) => {
    await loginPage.step_navigate();
    await loginPage.step_open_register();
    await loginPage.step_back_to_login();
    await loginPage.verify_login_page();
  });

  // scenario: Unauthenticated Profile
  test('[AC-6] should show not-logged-in message on profile', async ({ loginPage }) => {
    await loginPage.step_navigate_profile();
    await loginPage.verify_not_logged_in_message();
  });

  // scenario: Books Login Entry
  test('[AC-7] should open login from Book Store', async ({ loginPage }) => {
    await loginPage.step_navigate_books();
    await loginPage.step_open_login_from_books();
    await loginPage.verify_login_page();
  });

  // scenario: Login Welcome Heading
  test('[AC-8] should show Book Store login heading', async ({ loginPage }) => {
    await loginPage.step_navigate();
    await loginPage.verify_login_heading();
  });

  // scenario: Delete Account
  test('[AC-9] should delete account from profile', async ({ loginPage }) => {
    await loginPage.step_create_user();
    await loginPage.step_navigate();
    await loginPage.step_login();
    await loginPage.verify_profile_username();
    await loginPage.step_delete_account();
    await loginPage.verify_account_deleted();
  });

});
