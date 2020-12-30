# Run Terminal Command

Run predefined terminal commands from Explorer context menu or Command Palette.

## See how it works

![Example](img/example.gif)

## Configuration
### How to edit your command list:

VSCode -> File -> Preferences -> Settings 

It will show the list: [Text Editor, Workbench, Window, Features, Application, Extension].

Click on "Extensions", Scroll down and click on "Run Terminal Command" -> Edit in Settings.Json

Or just open and edit directly the file:
```C:\Users\{YOUR USERNAME}\AppData\Roaming\Code\User\Settings.Json```

Now you can edit the commands you want:

```json
    "runTerminalCommand.commands": [
        {
            "command": "ng g c ",
            "name": "Generate Component"
        },
        {
            "command": "tsc {resource}",
            "auto": true
        },
        {
            "command": "dotnet run",
            "auto": true,
            "group": ".NET Core"
        },
        {
            "command": "dotnet new page -n ",
            "group": ".NET Core"
        },
        {
            "command": "dotnet watch run",
            "auto": true,
            "preserve": true,
            "group": ".NET Core"
        },
        {
            "command": "dotnet add package {clipboard}",
            "auto": true,
            "group": ".NET Core"
        }
    ]
```

### Properties
| Property | Description                                                                                                   |
|----------|---------------------------------------------------------------------------------------------------------------|
| command  | The text to send to the terminal.                                                                             |
| auto     | Whether to add a new line to the text being sent, this is normally required to run a command in the terminal. |
| preserve | Don't dispose of terminal running this command.                                                               |
| name     | Name for the command. A human readable string which is rendered prominent.                                    |
| group    | Commands sharing the group name will be grouped together in the menu.                                         |

### Variables
| Variable    | Description                                                                                                |
|-------------|------------------------------------------------------------------------------------------------------------|
| {resource}  | Name of current resource.                                                                                  |
| {clipboard} | Clipboard content.                                                                                         |
