# Card error popup appears after navigating back from chair confirmation

## Environment
- Device: Android Samsung Galaxy A52s 5G
- OS Version: 14
- App Version: 3.3.9
- Language: English
- Network: Mobile Data

## Severity
Medium

## Priority
Medium

## Description
When the user selects a trip, proceeds to chair confirmation, and then navigates back without completing the booking or payment, a "Card Error" popup is displayed unexpectedly, even though no card data was entered.

## Preconditions
- User selects a valid trip
- Seats are available

## Steps to Reproduce
1. Open Go Bus mobile application.
2. Select a city and choose an available trip.
3. Select a seat.
4. Click on Chair Confirmation.
5. Navigate back to the previous screen without clicking Book Now.
6. Observe the displayed popup.

## Actual Result
A popup with a "Card Error" message is displayed after navigating back.

## Expected Result
No payment-related error message should be displayed when the user navigates back without initiating any payment process.

## Attachments
### Screenshot
![Blank Static Page](Attachments\Bug-007\Card_error_popup_appears.png)

### Video
[Blank Page Flow](Attachments\Bug-007\Card_error_popup_appears.mp4)

## Notes
This issue may confuse users and indicates incorrect state handling in the booking or payment flow.
