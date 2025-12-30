# Seat remains reserved after cancelling payment

## Environment
- Device: Android Samsung Galaxy A52s 5G
- OS Version: 14
- App Version: 3.3.9
- Language: English
- Network: WiFi

## Severity
High

## Priority
High

## Description
After cancelling the payment process, the selected seat remains reserved and cannot be booked again.

## Preconditions
- User selects a seat

## Steps to Reproduce
1. Select a trip and choose a seat.
2. Click Chair Confirmation.
3. Click Book Now.
4. Reach payment screen.
5. Cancel payment.
6. Return to seat selection.

## Actual Result
Seat remains marked as reserved.

## Expected Result
Seat should be released and available again.

## Attachments

### Video
[Blank Page Flow](Attachments\Bug-005\Seat-Not-Released.mp4)

## Notes
May affect seat availability.
