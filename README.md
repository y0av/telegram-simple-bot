# telegram-simple-bot
A simple telegram bot written in nodeJS to respond to command and gamequery. works on firebase functions

## Setup
To set the Telegram bot token, use the following Firebase CLI command:
``` 
firebase functions:config:set telegram.token="<telegram-bot-token>"
```
use [BotFather](https://t.me/botfather) to create a bot token

## Usage
Once the bot is set up and running, users can start a conversation with the bot by sending the `/start` command.
The bot will respond with an inline message containing a link to the game.

## Error Handling
The bot includes error handling to log and respond to errors.
If an error occurs, the bot will reply with an error message.
