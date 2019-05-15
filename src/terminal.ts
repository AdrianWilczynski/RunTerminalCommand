import * as vscode from 'vscode';
import { TerminalCommand } from './command';

let previousTerminal: vscode.Terminal | undefined;

export function runCommand(command: TerminalCommand, cwd?: string, resource?: string) {
    ensureDisposed();

    const terminal = vscode.window.createTerminal({ cwd: cwd });
    terminal.show();

    let addNewLine = command.auto;
    let commandText = command.command;
    if (/{resource}/i.test(command.command)) {
        commandText = command.command.replace(/{resource}/gi, resource || '');

        if (!resource) {
            addNewLine = false;
        }
    }

    terminal.sendText(commandText, addNewLine);

    if (!command.preserve) {
        previousTerminal = terminal;
    }
}

function ensureDisposed() {
    if (previousTerminal) {
        previousTerminal.dispose();
        previousTerminal = undefined;
    }
}