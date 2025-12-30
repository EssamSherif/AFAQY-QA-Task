# Pay and Book Now button enabled without credit card details

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
The Pay and Book Now button becomes enabled even when all credit card fields are empty, as long as the terms and conditions checkbox is selected.

## Preconditions
- User selects a trip and a seat

## Steps to Reproduce
1. Select a trip and choose a seat.
2. Click Book Now.
3. Navigate to the payment screen.
4. Leave all credit card fields empty.
5. Select “Yes, I have read and accept the purchase, change & cancellation conditions”.

## Actual Result
Pay and Book Now button becomes enabled and clickable.

## Expected Result
Pay and Book Now button should remain disabled until valid payment details are entered.

## Attachments

### Video
[Blank Page Flow](Attachments\Bug-003\button_enabled_without_credit_card_details.mp4)

## Notes
May lead to invalid booking attempts.
