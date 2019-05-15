import * as vscode from 'vscode';
import { TerminalCommand } from './command';

let terminal: vscode.Terminal | undefined;

export function run(command: TerminalCommand, cwd?: string, resource?: string) {
    ensureDisposed();

    terminal = vscode.window.createTerminal({ cwd: cwd });
    terminal.show();

    const commandText = command.command.replace(/{resource}/gi, resource || '');

    terminal.sendText(commandText, command.auto);
}

function ensureDisposed() {
    if (terminal) {
        terminal.dispose();
        terminal = undefined;
    }
}