// AUTO-GENERATED — edit this file directly; use crevoai_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { uploaddownloadExpected as expected } from '@config/page-loader';
import { expect } from '@playwright/test';


export class UploaddownloadPage extends BasePage {
  readonly path = '/upload-download';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: dom_id
  private downloadLink = this.page.locator('//*[@id="downloadButton"]');
  // locator-helper: dom_id
  private uploadInput = this.page.locator('//*[@id="uploadFile"]');
  // locator-helper: dom_id
  private uploadedFilePath = this.page.locator('//*[@id="uploadedFilePath"]');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Opens the Upload and Download page and waits for it to load.
   * @returns this for chaining
   */
  async step_navigate(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Downloads the sample file and verifies the suggested filename.
   * @returns this for chaining
   */
  async step_download_file(): Promise<this> {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.downloadLink.click(),
    ]);
    expect(download.suggestedFilename()).toBe(expected.downloadFileName);
    const path = await download.path();
    expect(path).toBeTruthy();
    return this;
  }

  /**
   * Uploads the sample image file.
   * @returns this for chaining
   */
  async step_upload_image(): Promise<this> {
    await this.uploadInput.setInputFiles(['support/data/uploaddownload/sample.png']);
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Verifies the uploaded file path is shown.
   * @returns this for chaining
   */
  async verify_uploaded_path(): Promise<this> {
    await this.uploadedFilePath.waitFor({ state: 'visible' });
    await expect(this.uploadedFilePath).toContainText(expected.uploadFileName);
    return this;
  }
}

