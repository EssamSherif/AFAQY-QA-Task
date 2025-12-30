# Incorrect time format displayed for trips

## Environment
- Device: Android Samsung Galaxy A52s 5G
- OS Version: 14
- App Version: 3.3.9
- Language: English
- Network: WiFi

## Severity
Low

## Priority
Medium

## Description
Trip time is displayed using an incorrect mixed format combining 24-hour format with AM/PM.

## Preconditions
- User searches for trips

## Steps to Reproduce
1. Select any city.
2. Search for available trips.
3. Observe displayed trip times.

## Actual Result
Time is displayed as 17:51PM.

## Expected Result
Time should be displayed as either 17:51 or 05:51 PM.

## Attachments
### Screenshot
![Blank Static Page](Attachments\Bug-006\Incorrect-Time-Format1.jpeg)

### Video
[Blank Page Flow](Attachments\Bug-006\Incorrect-Time-Format.mp4)
## Notes
UI formatting issue.
