---
feature: uploaddownload
status: approved
version: 1
layer: ui
---

# Intent

A user can open Upload and Download, download a file, and upload an image, with each action confirmed on the page or filesystem.

**Persona**
anonymous visitor — no credentials required; base URL from BASE_URL (.env)

# Feature

- [FA-32-1] Sample file can be downloaded
- [FA-32-2] Image can be uploaded and its path confirmed

# Acceptance Criteria

- [ ] AC-1: User can download the sample file
- [ ] AC-2: User can upload an image and see the file path

# Scenarios

## Download File [AC-1]

- User opens the Upload and Download page
- User downloads the sample file
- The file is saved successfully

## Upload Image [AC-2]

- User opens the Upload and Download page
- User uploads an image file
- The page shows the uploaded file path

# Out of Scope

- Other Elements widgets
