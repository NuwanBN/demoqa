// spec: .crevoai/stories/uploaddownload.story.md
import { test } from '@config/page.config';
import { uploaddownloadExpected as expected } from '@config/page-loader';

test.describe('DemoQA - Uploaddownload', () => {

  // scenario: Download File
  test('[AC-1] should download the sample file', async ({ uploaddownloadPage }) => {
    await uploaddownloadPage.step_navigate();
    await uploaddownloadPage.step_download_file();
  });

  // scenario: Upload Image
  test('[AC-2] should upload an image and show path', async ({ uploaddownloadPage }) => {
    await uploaddownloadPage.step_navigate();
    await uploaddownloadPage.step_upload_image();
    await uploaddownloadPage.verify_uploaded_path();
  });

});
