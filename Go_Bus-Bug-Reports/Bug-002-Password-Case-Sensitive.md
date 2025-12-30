# Password is not case-sensitive during login

## Environment
- Device: Android Samsung Galaxy A52s 5G
- OS Version: 14
- App Version: 3.3.9
- Language: English
- Network: WiFi

## Severity
Critical

## Priority
High

## Description
The application allows login using a password with different letter casing than the one originally set.

## Preconditions
- User has an existing account
- User is logged in

## Steps to Reproduce
1. Login to the application.
2. Navigate to Change Password.
3. Set a new password containing capital letters (e.g. Test@123).
4. Logout from the application.
5. Login again using the same password but with lowercase letters (e.g. test@123).

## Actual Result
User logs in successfully with incorrect password casing.

## Expected Result
Login should fail and display an incorrect password error.

## Attachments
### Screenshot
![Blank Static Page](Attachments\Bug-002\Password-is-not-case-sensitive-during-login.png)
![Blank Static Page](Attachments\Bug-002\Password-is-not-case-sensitive-during-login2.png)



### Video
[Blank Page Flow](Attachments\Bug-002\Password-is-not-case-sensitive-during-login.mp4)

## Notes
This is a security-related issue.
