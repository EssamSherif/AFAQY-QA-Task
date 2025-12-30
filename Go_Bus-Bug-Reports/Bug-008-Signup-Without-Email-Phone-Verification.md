# Sign up succeeds with invalid email or phone number without verification

## Environment
- Device: Android Samsung Galaxy A52s 5G
- OS Version: 14
- App Version: 3.3.9
- Language: English
- Network: Mobile Data

## Severity
Critical

## Priority
High

## Description
The application allows users to successfully sign up using invalid email addresses and phone numbers without performing any verification (OTP or confirmation), which leads to creation of unverified and potentially fake accounts.

## Preconditions
- User is logged out
- Application is opened on Sign Up screen

## Steps to Reproduce
1. Open Go Bus mobile application.
2. Navigate to Sign Up screen.
3. Enter an invalid email address (e.g. test@, test.com).
4. Enter an invalid phone number (e.g. random digits or incorrect length).
5. Complete the remaining required fields.
6. Click on Sign Up.

## Actual Result
Account is created successfully and the user is logged in without any email or phone verification.

## Expected Result
The system should:
- Validate email and phone format, AND
- Require verification through OTP or confirmation before activating the account.

## Attachments
### Screenshot
![Blank Static Page](Attachments\Bug-008\Sign-up-succeeds-with-invalid-email-or-phone-number.jpeg)

### Video
[Blank Page Flow](Attachments\Bug-008\Sign-up-succeeds-with-invalid-email-or-phone-number.mp4)

## Notes
This is a serious security and data integrity issue and may lead to fake or unverified accounts.
