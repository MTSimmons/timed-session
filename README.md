# Timed Session Extension for Visual Studio Code

This is a simple timer extension for Visual Studio Code named "timed-session". It provides a timer in the status bar and commands to start, pause, and clear the timer.

## Features

- Timer in the status bar: Displays the current time of the timer in the format `HH:MM:SS`.
- Start Timer command: Starts or resumes the timer.
- Pause Timer command: Pauses the timer.
- Clear Timer command: Clears the timer and resets it to `0:00:00`.

## Usage

You can control the timer using the following commands:

- Start Timer: `timed-session.start`
- Pause Timer: `timed-session.pause`
- Clear Timer: `timed-session.clear`

These commands can be executed from the Command Palette (`F1`) or bound to keyboard shortcuts.

## Known Issues

Currently, the timer does not persist its state between VS Code sessions. If you close VS Code, the timer will be reset.

## Release Notes

### 1.0.0

Initial release of the timed-session extension.